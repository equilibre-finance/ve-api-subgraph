# Subgraph for Equilibre Contracts

## Introduction
This subgraph indexes data from various smart contracts used in the Equilibre ecosystem. It enables efficient and real-time querying of blockchain data transformed into a convenient and readable format.

## Contracts Included
- **VotingEscrow**: Manages voting and escrow functionalities.
- **SinkManager**: Handles various sink management operations.
- **SinkConverter**: Facilitates the conversion within the sink mechanism.
- **SinkManagerFacilitator**: Aids in managing and facilitating sink operations.
- **GaugeFactoryForERC20 & GaugeFactoryForERC721**: Factories for creating gauges for ERC20 and ERC721 tokens.
- **RewardsDistributor**: Distributes rewards based on specific criteria.
- **ManagedRewardsFactory**: Manages the creation and distribution of rewards.
- **FactoryRegistry**: Registry contract to keep track of factory contracts.
- **NonfungiblePositionManager & NonfungibleTokenPositionDescriptor**: Manages non-fungible token positions and their descriptors.

## Setup
To set up and run this subgraph locally:

1. Clone the repository:
   ```
   git clone https://github.com/equilibre-finance/ve-api-subgraph.git
   cd ve-api-subgraph
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Build the subgraph:
   ```
   yarn codegen
   yarn build
   ```

4. Deploy the subgraph to a local Graph Node:
   ```
   graph create --node http://localhost:8020 <subgraph-name>
   graph deploy --ipfs http://localhost:5001 --node http://localhost:8020 <subgraph-name>
   ```

## Querying the Subgraph
You can query the subgraph using GraphQL queries. For example:

- Querying voting and escrow details:
  ```graphql
  {
    votingEscrows {
      id
      voter
      value
    }
  }
  ```

- Querying sink management operations:
  ```graphql
  {
    sinkManagers {
      id
      operation
      amount
    }
  }
  ```

- Querying gauge creation events:
  ```graphql
  {
    gaugeCreatedEvents {
      id
      gauge
      pool
    }
  }
  ```
