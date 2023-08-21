const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/dylanmclane/HikingSupplyCo/main/src/db.json');
    const data = response.data;

    const itemId = parseInt(event.queryStringParameters.id);
    const item = data.items.find(i => i.id === itemId);

    if (item) {
      return {
        statusCode: 200,
        body: JSON.stringify(item)
      };
    } else {
      return {
        statusCode: 404,
        body: "Item not found"
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server error'
    };
  }
};