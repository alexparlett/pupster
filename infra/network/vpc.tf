resource "random_id" "vpc" {
  byte_length = 8
  
}

resource "digitalocean_vpc" "vpc" {
  name     = "${var.environment}-${random_id.vpc.hex}"
  region   = var.region
  ip_range = var.vpc_cidr

}