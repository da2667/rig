#!/bin/bash

# navigate to app folder
cd /app

# install dependencies
npm install
npm run build
screen -d -m npm start
