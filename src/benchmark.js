const autocannon = require('autocannon');

async function run() {
  const options = {
    url: 'http://localhost:4000/graphql',
    connections: 10,
    pipelining: 1,
    duration: 10
  };

  const body = JSON.stringify({
    query: '{\n  projects {\n    id\n    name\n    description\n  }\n}'
  });

  const result = await autocannon({
    ...options,
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json'
    }
  });

  console.log(result);
}

run();
