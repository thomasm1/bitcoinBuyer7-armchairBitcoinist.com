# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/dev
# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/prod
# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/dev-api
import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Welcome to BitcoinBuyer-LambdaAPI')
    }
