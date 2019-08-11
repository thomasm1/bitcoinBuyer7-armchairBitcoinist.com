#!/bin/bash
npm install aws-xray-sdk

# permissions for aws files
chmod a+r * 
zip -r function.zip .