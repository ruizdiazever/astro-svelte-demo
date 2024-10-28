#!/usr/bin/bash
sudo docker build -t demo-client .
sudo docker run --env-file .env -p 4322:4322 -td demo-client
