#!/usr/bin/bash
sudo docker build -t demo-client .
sudo docker run --env-file .env.production.local -p 4322:4322 -td demo-client
