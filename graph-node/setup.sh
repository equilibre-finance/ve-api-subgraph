#!/bin/bash

# Stop and remove all running containers
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)

# Wait for the containers to stop
sleep 5

# Remove the graph-network if it exists
sudo docker network rm graph-node_graph-network 2>/dev/null

# Create the graph-network
sudo docker network create graph-node_graph-network

# Start the containers
sudo docker-compose up -d

# Wait for the containers to be up and running
sleep 10

# Run the create-local command
sudo docker-compose exec graph-node-graph-node-1 npm run create-local
