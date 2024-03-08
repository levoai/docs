---
sidebar_position: 4
---

# Satellite on AWS EKS

AWS EKS supports two compute types for its nodes, EC2 and Fargate. Depending on your usecase, you can follow the installation steps given below.
- [Install using EC2](satellite-aws-ecs.mdx)
- [Install using Fargate](satellite-aws-eks-fargate.md)

### Prerequisites
- [eksctl](https://eksctl.io/) version >= `v0.152.0`
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working on your local machine.
- An AWS account with EKS permissions.

## Install in AWS EKS using EC2

### 1. Setup environment variables

```bash
export CLUSTER_NAME='Cluster Name'
export REGION='AWS Region'
export ACCOUNT_ID='AWS Account ID'
```


### 2. Cluster Creation
```bash
read -r -d '' EKS_CLUSTER <<EOF
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: ${CLUSTER_NAME}
  region: ${REGION}

vpc:
  subnets:
    private:
      # MENTION THE SUBNETS YOU WANT TO USE FOR YOUR SATELLITE
      # FOR EXAMPLE:
      # us-west-2a: { id: subnet-0d09e999a579234ea }
      # us-west-2b: { id: subnet-0d09e999a579234eb }

nodeGroups:
  - name: ng-e2e
    instanceType: t2.xlarge
    desiredCapacity: 1
    volumeSize: 40
    privateNetworking: true
EOF

echo "${EKS_CLUSTER}" > eks-cluster.yaml

eksctl create cluster -f ./configuration/eks-cluster.yaml
```


### 3. Connecting to the cluster

AWS EKS grants cluster admin permissions to the account from which the cluster is created. If you don't need access to the cluster for other AWS Users, you can skip this section.

Access to other AWS users in the same account can be granted via 2 ways.
- [Adding individual access to user accounts](#adding-individuals-to-the-cluster)
- [Giving the permissions to a user group](#giving-access-to-an-iam-user-group)

#### Adding individuals to the cluster

This command can be run to add an inidividual user account to the cluster's aws-auth configmap

```bash
eksctl create iamidentitymapping \
    --cluster ${CLUSTER_NAME} \
    --region ${REGION} \
    --arn <AWS ACCOUNT ARN FOR THE USER> \
    --group system:masters \
    --no-duplicate-arns \
    --username <AWS USERNAME FOR THE USER>
```

#### Giving access to an IAM User Group

We create a role developer.assume-access.role and attach two policies to it. The first one is `EKSFullAccess` so that it has access to all the EKS resources. The second one is `developer.assume-eks-access-role.policy` that allows assuming the role.

A detailed guide on defining the roles and policies can be found [here](https://eng.grip.security/enabling-aws-iam-group-access-to-an-eks-cluster-using-rbac).

Once you have followed the above guide to create the roles and attach the specific policies, you can add the role to the cluster's aws-auth config map to let the developers group access the cluster
```bash
eksctl create iamidentitymapping \
    --cluster ${CLUSTER_NAME} \
    --region ${REGION} \
    --arn arn:aws:iam::${ACCOUND_ID}:role/developer.assume-access.role \
    --group system:masters \
```

This needs to be run in order to grant access to the cluster.

One can Connect to the cluster by running just a single command

```bash
aws eks update-kubeconfig --name ${CLUSTER_NAME} --region ${REGION}> --role-arn arn:aws:iam::${ACCOUNT_ID}:role/developer.assume-access.role
```

This commands updates the kubeconfig and adds the context for the cluster and sets the current context to it.
The `--role` argument sets the correct role and policies so that seemless access to the cluster is granted instantly.


### 4. Setting the cluster up

#### Creating an OIDC provider

Run these two commands:
```bash
oidc_id=$(aws eks describe-cluster --name ${CLUSTER_NAME} --region ${REGION} --query "cluster.identity.oidc.issuer" --output text | cut -d '/' -f 5)
```

```bash
aws iam list-open-id-connect-providers | grep $oidc_id | cut -d "/" -f4 | cut -d "\"" -f1
```

If this returns a value, that is the OIDC ID that we need. If the statement returns nothing, run this command:
```bash
eksctl utils associate-iam-oidc-provider --cluster ${CLUSTER_NAME} --region ${REGION} --approve
```

This creates an OIDC Identity Provider.

Next, to create a role in AWS for the EBS CSI Driver add-on ([Amazon Elastic Block Store CSI Driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) manages persistent volumes in EKS) we need to run these:

```bash
OIDC=$(aws iam list-open-id-connect-providers | grep $oidc_id | cut -d "/" -f4 | cut -d "\"" -f1)

read -r -d '' EBS_DRIVER_POLICY <<EOF
{
"Version": "2012-10-17",
"Statement": [
    {
    "Sid": "",
    "Effect": "Allow",
    "Principal": {
        "Federated": "arn:aws:iam::${ACCOUNT_ID}:oidc-provider/oidc.eks.${REGION}.amazonaws.com/id/${OIDC}"
    },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
        "StringEquals": {
        "oidc.eks.${REGION}.amazonaws.com/id/${OIDC}:aud": "sts.amazonaws.com",
        "oidc.eks.${REGION}.amazonaws.com/id/${OIDC}:sub": "system:serviceaccount:kube-system:ebs-csi-controller-sa"
        }
    }
    }
]
}
EOF
echo "${EBS_DRIVER_POLICY}" > aws-ebs-csi-driver-trust-policy.json

aws iam create-role \
  --role-name AmazonEKS_EBS_CSI_DriverRole \
  --assume-role-policy-document file://aws-ebs-csi-driver-trust-policy.json

aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy \
  --role-name AmazonEKS_EBS_CSI_DriverRole

eksctl create addon --name aws-ebs-csi-driver --cluster ${CLUSTER_NAME} --region ${REGION} --service-account-role-arn arn:aws:iam::${ACCOUNT_ID}:role/AmazonEKS_EBS_CSI_DriverRole —force
```

### 5. Install the satellite

Please follow the instructions in the [Install on Kubernetes](satellite-kubernetes.md) section to install the Satellite.

Please ensure that you note down the address of the collector.

