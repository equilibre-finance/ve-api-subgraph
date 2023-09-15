const express = require('express');
const { request } = require('graphql-request');

const app = express();
const port = 3001;

// Set the GraphQL endpoint URL for your deployed subgraph
const endpoint0 = 'http://graph.equilibrefinance.com:8000';

app.get('/votes', async (req, res) => {
  const { id, voter, choice, epoch } = req.query;

  let query = `
    query {
      votes {
        id
        voter
        choice
      }
    }
  `;

  if (id) {
    query = `
      query {
        votes(where: { id: "${id}" }) {
          id
          voter
          choice
        }
      }
    `;
  } else if (voter) {
    query = `
      query {
        votes(where: { voter: "${voter}" }) {
          id
          voter
          choice
        }
      }
    `;
  } else if (choice) {
    query = `
      query {
        votes(where: { choice: ${choice} }) {
          id
          voter
          choice
        }
      }
    `;
  }

  else if (epoch) {
    query = `
    query {
      votes(where: { epoch: ${epoch} }) {
        id
        voter
        tokenId
        choice
        epoch
      }
    }
  `;  
  }

  try {
    const data = await request(endpoint0, query);    
    res.send(data.votes);
  } catch (error) {
    console.error('Error fetching votes:', error);
    res.status(500).send('Error fetching votes');
  }
});


app.get('/tokens', async (req, res) => {  

  let query = `
    query {
      tokens {
        id
        name
        symbol
        totalLiquidity
        totalSupply
        tradeVolumeUSD
        tradeVolume
        txCount
        untrackedVolumeUSD
      }
    }
  `;

  try {
    const data = await request(endpoint0, query);
    console.log(data)
    
    res.send(data.votes);
  } catch (error) {
    console.error('Error fetching votes:', error);
    res.status(500).send('Error fetching votes');
  }
});


app.get('/swaps', async (req, res) => {  

  let query = `
    query {
      swaps(first: 1000, orderDirection: desc) {
        amount0In
        amount0Out
        amount1In
        amount1Out
        amountUSD
        from
        id
        logIndex
        sender
        timestamp
        to
        transaction {
          id
        }
        pair {
          id
          token1 {
            symbol
          }
        }
      }
    }
  `;

  console.log(query)

  try {
    const data = await request(endpoint0, query);
    console.log(data)
    
    res.send(data.votes);
  } catch (error) {
    console.error('Error fetching votes:', error);
    res.status(500).send('Error fetching votes');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
