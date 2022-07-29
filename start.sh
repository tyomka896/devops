#!/bin/bash

hello_img="06-docker_hello"
hello_ps="${hello_img}_app"

mountain_img="06-docker_mountain"
mountain_ps="${mountain_img}_app"

# Stop containers if some created
if [[ -n $(docker ps -a | grep $hello_ps) ]]; then
    echo "Stopping running container ${hello_ps}"

    docker stop $hello_ps && docker rm $hello_ps
fi

if [[ -n $(docker ps -a | grep $mountain_ps) ]]; then
    echo "Stopping running container ${mountain_ps}"

    docker stop $mountain_ps && docker rm $mountain_ps
fi

# Hello world api
docker build ./hello -t $hello_img

docker run -d --rm -p 3000:3000 --name $hello_ps $hello_img

# Moutain web page
docker build ./mountain -t $mountain_img

docker run -d --rm -p 80:80 --name $mountain_ps $mountain_img
