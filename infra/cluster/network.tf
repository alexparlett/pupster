data "tfe_outputs" "network" {
    organization = "pupster"
    workspace = "network-${var.environment}"
}