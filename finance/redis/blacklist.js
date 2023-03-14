const redis = require('redis');

const client = redis.createClient({
  host: 'redis',
  port: 6379,
  prefix: 'blacklist:',
});

client.on('connect', () => {
  console.log('Succesfully connected to Redis!');
});

client.on('error', (err) => {
  console.log('Error:', err);
});

module.exports = client;
