output "vpc_id" {
    value = digitalocean_vpc.vpc.id
  
}

output "vpc_urn" {
    value = digitalocean_vpc.vpc.urn
    
}

output "vpc_cidr" {
    value = digitalocean_vpc.vpc.ip_range
  
}