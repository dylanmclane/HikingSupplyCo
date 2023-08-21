const data = require('../path_to_your_db.json');

exports.handler = async (event, context) => {
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
};