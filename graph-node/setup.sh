#!/bin/bash

# Stop and remove all running containers
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)

# Wait for the containers to stop
sleep 5

# Start the containers
sudo docker-compose up -d

cd ve-api-subgraph

npm run codegen

npm run build

npm run create-local

npm run deploy-local


