const AWSXRay = require('aws-xray-sdk-core') // AWS SDK  with every Lambda fx
const AWS = AWSXRay.captureAWS(require('aws-sdk'))  
const s3 = new AWS.S3()  // S3 IAM role

exports.handler = async function(event) {
  return s3.listBuckets().promise()
}