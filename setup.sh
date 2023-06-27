#!/bin/bash

# Stop and remove the existing containers and network
sudo docker-compose down

# Remove the graph-network if it exists
sudo docker network rm graph-node_graph-network 2>/dev/null

# Start the containers and create the network
sudo docker-compose up -d

# Wait for the containers to be up and running
sleep 5

# Run the create-local command
sudo docker-compose exec graph-node-graph-node-1 npm run create-local
