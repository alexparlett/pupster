resource "digitalocean_project" "pupster" {
  name        = "pupster-${var.environment}"
  purpose     = "Mobile Application"
  environment = var.environment
}