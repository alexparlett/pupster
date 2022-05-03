output "cluster_id" {
    value = digitalocean_kubernetes_cluster.cluster.id
  
}

output "cluster_endpoint" {
    value = digitalocean_kubernetes_cluster.cluster.endpoint
    
}

output "cluster_name" {
  value = digitalocean_kubernetes_cluster.cluster.name

}