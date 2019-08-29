################# AWS AMPLIFY ######################
npm install -g @aws-amplify/cli
amplify init (in project root directory)
amplify add auth
amplify push
#check userpool in cognito
amplify add api # use GraphQL for real-time # use API key for auth type
	# No for anotated GraphQL schema # yes for guided schema creation
npm install --save aws-appsync graphql-tag
