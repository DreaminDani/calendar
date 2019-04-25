import fetch from 'node-fetch'

const API_ENDPOINT = 'https://icanhazip.com/'

exports.handler = async (event, context) => {
  const res = await fetch(API_ENDPOINT)
    .then(response => response.text())
    .then(data => ({
      statusCode: 200,
      body: `${data}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
  return res
}
