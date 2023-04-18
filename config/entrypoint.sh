#!/bin/bash

sed -i "s#{API_BASE_URL}#${API_BASE_URL:-http://localhost:3002/api}#g" /usr/share/nginx/html/env.js

nginx -g "daemon off;"