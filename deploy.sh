#!/bin/bash

# Define variables
REPO_URL="https://github.com/saranshsinhaa/event-portal"
PROJECT_DIR="event-portal"
DOCKER_IMAGE_NAME="event-portal"
DOCKER_CONTAINER_NAME="event-portal-container"

# Check if the repository exists
if [ -d "$PROJECT_DIR" ]; then
  # If exists, navigate to the directory and pull latest changes
  cd "$PROJECT_DIR"
  git pull origin main
else
  # If doesn't exist, clone the repository
  git clone $REPO_URL
  cd "$PROJECT_DIR"
fi

# Build the Docker image
docker build -t $DOCKER_IMAGE_NAME .

# Stop and remove existing container (if exists)
docker stop $DOCKER_CONTAINER_NAME || true
docker rm $DOCKER_CONTAINER_NAME || true

# Run the Docker container
docker run -d -p 3000:3000 --name $DOCKER_CONTAINER_NAME $DOCKER_IMAGE_NAME
