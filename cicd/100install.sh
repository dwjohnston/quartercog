#!/bin/sh
 
# I'm following the tutorial from here: 
# https://caveofcode.com/2017/03/continuous-delivery-to-kubernetes-with-travis-ci/


#Install kubectl 
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

#kubectl connect

kubectl config set-cluster cs-ac20b658-5917-44a3-a725-240581f47770 --server https://proxy.containership.io/v3/organizations/314ef0be-6c46-4c6b-9be8-07a9877f53c3/clusters/ac20b658-5917-44a3-a725-240581f47770/k8sapi/proxy && kubectl config set-credentials cs-e223df6a-18ef-4974-b414-daff6c0ece2c --token $KUBERNETES_TOKEN && kubectl config set-context cs-ctx-ac20b658-5917-44a3-a725-240581f47770 --cluster cs-ac20b658-5917-44a3-a725-240581f47770 --user cs-e223df6a-18ef-4974-b414-daff6c0ece2c && kubectl config use-context cs-ctx-ac20b658-5917-44a3-a725-240581f47770
#Docker Login

docker login 

