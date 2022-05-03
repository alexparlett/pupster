data "digitalocean_kubernetes_versions" "current" {
  version_prefix = var.cluster_version
}

resource "digitalocean_kubernetes_cluster" "cluster" {
  name    = "cluster-${var.environment}"
  region  = var.region
  version = data.digitalocean_kubernetes_versions.current.latest_version

  vpc_uuid = data.tfe_outputs.network.values.vpc_id

  node_pool {
    name       = "default"
    size       = var.worker_size
    node_count = var.worker_count
  }
}