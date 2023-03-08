import redis from 'redis';

const client = redis.createClient({
  host: 'redis',
  port: 6379,
});

client.on('connect', () => {
  console.log('Succesfully connected to Redis!');
});

client.on('error', (err) => {
  console.log('Error:', err);
});

export default client;
