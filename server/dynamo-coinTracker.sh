#!/bin/bash

# Projection Expression
aws dynamodb scan --table-name CoinTrackers --projection-expression "user_id, content"  --region us-east-1

# Filter Expression
aws dynamodb scan --table-name CoinTrackers --filter-expression "user_id = :u" --expression-attribute-values '{ ":u": {"S":"124usersoi3"}}' --region us-east-1

# Page Size: 1 API call with 3 Items
aws dynamodb scan --table-name CoinTrackers --region us-east-1

# 3 API calls with 3 Items
aws dynamodb scan --table-name CoinTrackers --region us-east-1 --page-size 1

# Max Item:
aws dynamodb scan --table-name CoinTrackers --region us-east-1 --max-items 1

# Fetch next item
aws dynamodb scan --table-name CoinTrackers --region us-east-1 --max-items 1 --starting-token eyJFeGNsdXNpdmVTdGFydEtleSI6IG51bGwsICJib3RvX3RydW5jYXRlX2Ftb3VudCI6IDF9

# Fetch next item
aws dynamodb scan --table-name CoinTrackers --region us-east-1 --max-items 1 --starting-token eyJFeGNsdXNpdmVTdGFydEtleSI6IG51bGwsICJib3RvX3RydW5jYXRlX2Ftb3VudCI6IDJ9
