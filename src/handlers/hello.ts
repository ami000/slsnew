import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda";

export const helloHandler: APIGatewayProxyHandler = async (event:APIGatewayProxyEvent, Context:Context) => {
    let response:APIGatewayProxyResult;
    response = {
        body: "Hello World!",
        statusCode: 200
    }

    return response;
};