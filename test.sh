#!/bin/bash

set -e

yes "" | ./node_modules/.bin/vue init . test-cmp

cd test-cmp
npm install
npm run lint
npm run build
npm run build:umd
npm run build:doc
npm run test
npm run test:cov
