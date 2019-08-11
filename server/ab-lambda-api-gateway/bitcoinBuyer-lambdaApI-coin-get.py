# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/dev/cointracker
# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/prod/cointracker
import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('CoinTracker Page')
    }
