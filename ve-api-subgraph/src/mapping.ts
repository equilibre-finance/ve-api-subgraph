import { BigInt, Bytes, Address, ethereum, log } from "@graphprotocol/graph-ts";
import {
  Vote,
  AbstainedEvent,
  AttachEvent,
  DepositEvent,
  DetachEvent,
  DistributeRewardEvent,
  GaugeCreatedEvent,
  GaugeKilledEvent,
  GaugeRevivedEvent,
  NotifyRewardEvent,
  WhitelistedEvent,
  WithdrawEvent
} from "../generated/schema"; // Import the generated entities

let currentEpoch: BigInt; // Declare the currentEpoch variable

// Handler for the Voted event
export function handleVoted(event: ethereum.Event): void {
  let tokenId = event.parameters[1].value.toBigInt();
  let choice = event.parameters[2].value.toBigInt();

  let vote = new Vote(tokenId.toString());
  vote.voter = event.parameters[0].value.toAddress().toHexString();
  vote.tokenId = tokenId;
  vote.choice = choice;
  vote.save();

  // Print the event data on the screen
  log.info("Voted Event - Vote ID: {}, Voter: {}, Token ID: {}, Choice: {}", [
    tokenId.toString(),
    vote.voter,
    tokenId.toString(),
    choice.toString()
  ]);
}

// Handler for the Abstained event
export function handleAbstained(event: ethereum.Event): void {
  let voteId = event.parameters[0].value.toBigInt();
  let abstainedChoice = event.parameters[1].value.toBigInt();

  let abstainedEvent = new AbstainedEvent(event.transaction.hash.toHex());
  abstainedEvent.id = event.transaction.hash.toHex();
  abstainedEvent.tokenId = voteId;
  abstainedEvent.weight = abstainedChoice;
  abstainedEvent.save();

  // Print the event data on the screen
  log.info("Abstained Event - Vote ID: {}, Weight: {}", [
    voteId.toString(),
    abstainedChoice.toString()
  ]);
}

// Handler for the Attach event
export function handleAttach(event: ethereum.Event): void {
  let owner = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let gauge = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let tokenId = event.parameters[2].value.toBigInt();

  let attachEvent = new AttachEvent(event.transaction.hash.toHex());
  attachEvent.owner = owner;
  attachEvent.gauge = gauge;
  attachEvent.tokenId = tokenId;
  attachEvent.save();

  // Print the event data on the screen
  log.info("Attach Event - Owner: {}, Gauge: {}, Token ID: {}", [
    owner.toHexString(),
    gauge.toHexString(),
    tokenId.toString()
  ]);
}


// Handler for the Deposit event
export function handleDeposit(event: ethereum.Event): void {
  let lp = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let gauge = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let tokenId = event.parameters[2].value.toBigInt();
  let amount = event.parameters[3].value.toBigInt();

  let depositEvent = new DepositEvent(event.transaction.hash.toHex());
  depositEvent.lp = lp;
  depositEvent.gauge = gauge;
  depositEvent.tokenId = tokenId;
  depositEvent.amount = amount;
  depositEvent.save();

  // Print the event data on the screen
  log.info(
    "Deposit Event - LP: {}, Gauge: {}, Token ID: {}, Amount: {}",
    [lp.toHexString(), gauge.toHexString(), tokenId.toString(), amount.toString()]
  );
}

// Handler for the Detach event
export function handleDetach(event: ethereum.Event): void {
  let owner = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let gauge = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let tokenId = event.parameters[2].value.toBigInt();

  let detachEvent = new DetachEvent(event.transaction.hash.toHex());
  detachEvent.owner = owner;
  detachEvent.gauge = gauge;
  detachEvent.tokenId = tokenId;
  detachEvent.save();

  // Print the event data on the screen
  log.info("Detach Event - Owner: {}, Gauge: {}, Token ID: {}", [
    owner.toHexString(),
    gauge.toHexString(),
    tokenId.toString()
  ]);
}

// Handler for the DistributeReward event
export function handleDistributeReward(event: ethereum.Event): void {
  let sender = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let gauge = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let amount = event.parameters[2].value.toBigInt();

  let distributeRewardEvent = new DistributeRewardEvent(
    event.transaction.hash.toHex()
  );
  distributeRewardEvent.sender = sender;
  distributeRewardEvent.gauge = gauge;
  distributeRewardEvent.amount = amount;
  distributeRewardEvent.save();

  // Print the event data on the screen
  log.info("DistributeReward Event - Sender: {}, Gauge: {}, Amount: {}", [
    sender.toHexString(),
    gauge.toHexString(),
    amount.toString()
  ]);
}

// Handler for the GaugeCreated event
export function handleGaugeCreated(event: ethereum.Event): void {
  let gauge = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let creator = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let internalBribe = Bytes.fromHexString(event.parameters[2].value.toAddress().toHexString());
  let externalBribe = Bytes.fromHexString(event.parameters[3].value.toAddress().toHexString());
  let pool = Bytes.fromHexString(event.parameters[4].value.toAddress().toHexString());

  let gaugeCreatedEvent = new GaugeCreatedEvent(
    event.transaction.hash.toHex()
  );
  gaugeCreatedEvent.gauge = gauge;
  gaugeCreatedEvent.creator = creator;
  gaugeCreatedEvent.internal_bribe = internalBribe;
  gaugeCreatedEvent.external_bribe = externalBribe;
  gaugeCreatedEvent.pool = pool;
  gaugeCreatedEvent.save();

  // Print the event data on the screen
  log.info(
    "GaugeCreated Event - Gauge: {}, Creator: {}, Internal Bribe: {}, External Bribe: {}, Pool: {}",
    [gauge.toHexString(), creator.toHexString(), internalBribe.toHexString(), externalBribe.toHexString(), pool.toHexString()]
  );
}

// Handler for the GaugeKilled event
export function handleGaugeKilled(event: ethereum.Event): void {
  let gauge = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());

  let gaugeKilledEvent = new GaugeKilledEvent(event.transaction.hash.toHex());
  gaugeKilledEvent.gauge = gauge;
  gaugeKilledEvent.save();

  // Print the event data on the screen
  log.info("GaugeKilled Event - Gauge: {}", [gauge.toHexString()]);
}

// Handler for the GaugeRevived event
export function handleGaugeRevived(event: ethereum.Event): void {
  let gauge = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());

  let gaugeRevivedEvent = new GaugeRevivedEvent(event.transaction.hash.toHex());
  gaugeRevivedEvent.gauge = gauge;
  gaugeRevivedEvent.save();

  // Print the event data on the screen
  log.info("GaugeRevived Event - Gauge: {}", [gauge.toHexString()]);
}

// Handler for the NotifyReward event
export function handleNotifyReward(event: ethereum.Event): void {
  let sender = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let reward = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let amount = event.parameters[2].value.toBigInt();

  let notifyRewardEvent = new NotifyRewardEvent(
    event.transaction.hash.toHex()
  );
  notifyRewardEvent.sender = sender;
  notifyRewardEvent.reward = reward;
  notifyRewardEvent.amount = amount;
  notifyRewardEvent.save();

  // Print the event data on the screen
  log.info("NotifyReward Event - Sender: {}, Reward: {}, Amount: {}", [
    sender.toHexString(),
    reward.toHexString(),
    amount.toString()
  ]);
}

// Handler for the Whitelisted event
export function handleWhitelisted(event: ethereum.Event): void {
  let whitelister = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let token = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());

  let whitelistedEvent = new WhitelistedEvent(event.transaction.hash.toHex());
  whitelistedEvent.whitelister = whitelister;
  whitelistedEvent.token = token;
  whitelistedEvent.save();

  // Print the event data on the screen
  log.info("Whitelisted Event - Whitelister: {}, Token: {}", [
    whitelister.toHexString(),
    token.toHexString()
  ]);
}

// Handler for the Withdraw event
export function handleWithdraw(event: ethereum.Event): void {
  let lp = Bytes.fromHexString(event.parameters[0].value.toAddress().toHexString());
  let gauge = Bytes.fromHexString(event.parameters[1].value.toAddress().toHexString());
  let tokenId = event.parameters[2].value.toBigInt();
  let amount = event.parameters[3].value.toBigInt();

  let withdrawEvent = new WithdrawEvent(event.transaction.hash.toHex());
  withdrawEvent.lp = lp;
  withdrawEvent.gauge = gauge;
  withdrawEvent.tokenId = tokenId;
  withdrawEvent.amount = amount;
  withdrawEvent.save();

  // Print the event data on the screen
  log.info("handleWithdraw Event - lp: {}, gauge: {}", [
    lp.toHexString(),
    gauge.toHexString()
  ]);


}