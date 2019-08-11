# https://i0ydvnlkak.execute-api.us-east-1.amazonaws.com/dev-xml/cointracker-xml

import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('CoinTracker Page')
    } 

# Integration Response: 
# Mapping Templates:
# --------------------
# #set($inputRoot = $input.path('$'))
# <xml>
#     <response>
#         <body>
#             $inputRoot.body
#         </body>
#         <statusCode>
#             $inputRoot.statusCode
#         </statusCode>
#     </response>
# </xml>  
