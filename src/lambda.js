export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, Woooorld! Your request was received at ${event.requestContext.time}.`,
  };
}
