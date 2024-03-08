---
sidebar_position: 5
---

# Satellite on AWS EKS using Fargate

Fargate allows us to have containers without the overhead of managing and scaling servers and clusters. AWS handles the maintenance, as well as security and health of the instances for us, which is something we would not want to spend time into.

### 1. Setup environment variables

```bash
export CLUSTER_NAME='Cluster Name'
export REGION='AWS Region'
export ACCOUNT_ID='AWS Account ID'
```

### 2. Cluster creation

To create a cluster using Fargate, run

```bash
eksctl create cluster --name ${CLUSTER_NAME} --region ${REGION} --fargate 
```

`--fargate` specifies that the cluster needs to run on fargate, and initially assigns 2 fargate nodes to us


It can be checked by running `kubectl get nodes` . The output would be something like this:
```bash
fargate-ip-192.168.1.1.<aws-region>.compute.internal   Ready    <none>   1m   v1.25
fargate-ip-192-168-1.1.<aws-region>.compute.internal   Ready    <none>   1m   v1.25
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


### 4. Install the satellite
Please follow the instructions in the [Install on Kubernetes](#install-on-kubernetes) section to install the Satellite.

Please ensure that you note down the address of the collector.

