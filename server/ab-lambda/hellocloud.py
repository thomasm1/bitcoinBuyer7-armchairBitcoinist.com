def lambda_handler(event, context):
    print("In lambda handler")
    
    resp = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": "Lambda Handler - GET Method Status Code ... expect 200 :-) Thomas Milton"
    }
    
    return resp