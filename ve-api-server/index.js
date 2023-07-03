const { request } = require('graphql-request');

// Set the GraphQL endpoint URL for your deployed subgraph
const endpoint = 'http://localhost:8000/subgraphs/name/equilibre/subgraph1';

// Function to fetch votes based on epoch
async function getVotesByEpoch(epoch) {
  const query = `
    query {
      votes(where: { epoch: ${epoch} }) {
        id
        voter
        choice        
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    console.log(`Votes for Epoch ${epoch}:`, data.votes);
    // Process the data as per your requirements
  } catch (error) {
    console.error('Error fetching votes by epoch:', error);
  }
}

// Function to fetch the last 100 votes
async function getLast100Votes() {
  const query = `
    query {
      votes(first: 100, orderDirection: desc) {
        id
        voter
        choice
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    console.log('Last 100 Votes:', data.votes);
    // Process the data as per your requirements
  } catch (error) {
    console.error('Error fetching last 100 votes:', error);
  }
}

// Call the functions to fetch data
// getVotesByEpoch(1234); // Replace with the desired epoch number
getLast100Votes();
