#!/bin/bash

echo 'Benchmarking express'
echo '============================================================================='
ab -kc 50 -n 5000 -p benchmark_post_data.json -T application/json http://localhost:3000/hello

echo ''
echo 'Benchmarking hapi'
echo '============================================================================='
ab -kc 50 -n 5000 -p benchmark_post_data.json -T application/json http://localhost:3001/hello

echo ''
echo 'Benchmarking restify'
echo '============================================================================='
ab -kc 50 -n 5000 -p benchmark_post_data.json -T application/json http://localhost:3002/hello