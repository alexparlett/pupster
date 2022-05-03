data "tfe_outputs" "base" {
    organization = "pupster"
    workspace = "base-${var.environment}"
}

resource "digitalocean_project_resources" "cluster" {
  project = data.tfe_outputs.base.values.project
  resources = [
    digitalocean_kubernetes_cluster.cluster.id
  ]
}