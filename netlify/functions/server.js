const server = require("../../dist/server/index.js");

exports.handler = async (event, context) => {
  try {
    // Convert Netlify event to Fetch API Request
    const url = new URL(event.rawUrl);
    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body ? Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8') : undefined,
    });

    // Call the server
    const response = await server.fetch(request, {}, context);

    // Convert Fetch API Response to Netlify response
    const responseBody = await response.arrayBuffer();
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      statusCode: response.status,
      headers,
      body: Buffer.from(responseBody).toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};