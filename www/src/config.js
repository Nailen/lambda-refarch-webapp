// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4gcr1vvliggmp2h89l4uph9u2r",     // CognitoClientID
  "api_base_url": "None",                                     // TodoFunctionApi
  "cognito_hosted_domain": "kosc.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "None"                                      // AmplifyURL
};

export default config;
