## Ve-API Subgraph Documentation

### Introduction

Welcome to the documentation for the Ve-API subgraph, which powers the GraphQL endpoint located at [https://graph.equilibrefinance.com/subgraphs/name/equilibre/ve-api/graphql](https://graph.equilibrefinance.com/subgraphs/name/equilibre/ve-api/graphql). This subgraph provides access to data related to the Ve (Vote Escrow) functionality within the Equilibre Finance ecosystem.

### Overview

The Ve-API subgraph is responsible for indexing and aggregating data from various smart contracts and events related to Vote Escrow. It offers a comprehensive set of GraphQL queries to retrieve information about Ve epochs, VeNFT holders, Ve amounts, and more.

### Getting Started

To get started with the Ve-API subgraph, follow the steps below:

1. Access the GraphQL endpoint at [https://graph.equilibrefinance.com/subgraphs/name/equilibre/ve-api/graphql](https://graph.equilibrefinance.com/subgraphs/name/equilibre/ve-api/graphql).
2. Use GraphQL queries to retrieve the desired data. Refer to the available queries section for more information on the available options.

### Available Queries

The Ve-API subgraph supports the following GraphQL queries:

#### Ve Epochs

Retrieve information about Ve epochs.

```graphql
query {
  veEpochs {
    id
    number
    startTimestamp
    endTimestamp
    totalVeAmount
    totalVeNftHolders
    ...
  }
}
```

#### VeNFT Holders

Fetch information about VeNFT holders.

```graphql
query {
  veNftHolders {
    id
    holder
    veNftId
    veAmount
    ...
  }
}
```

#### Ve Amounts

Obtain details about Ve amounts.

```graphql
query {
  veAmounts {
    id
    veEpoch
    veNftHolder
    amount
    ...
  }
}
```

### Conclusion

The Ve-API subgraph provides a powerful GraphQL endpoint to access information about Vote Escrow within the Equilibre Finance ecosystem. By leveraging the subgraph, developers can easily retrieve and analyze data related to Ve epochs, VeNFT holders, and Ve amounts.
