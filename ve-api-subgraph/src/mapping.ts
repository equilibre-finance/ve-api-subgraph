import { BigInt, Address, ethereum, log } from "@graphprotocol/graph-ts";

import { Vote } from "../generated/schema"; // Import the generated 'Vote' entity

// Handler for the Voted event
export function handleVoted(event: ethereum.Event): void {
  let voteId = event.parameters[1].value.toBigInt();
  let choice = event.parameters[2].value.toBigInt();

  let vote = new Vote(voteId.toString());
  vote.voter = event.parameters[0].value.toAddress().toHexString();
  vote.choice = choice;
  vote.save();

  // Print the event data on the screen
  log.info("Voted Event - Vote ID: {}, tokenId: {}, weight: {}", [
    voteId.toString(),
    vote.voter,
    choice.toString(),
  ]);
}

// Handler for the Abstained event
export function handleAbstained(event: ethereum.Event): void {
  let voteId = event.parameters[0].value.toBigInt();
  let abstainedChoice = event.parameters[1].value.toBigInt();

  let vote = new Vote(voteId.toString());
  vote.voter = event.transaction.from.toHexString();
  vote.choice = abstainedChoice;
  vote.save();

  // Print the event data on the screen
  log.info("Abstained Event - Vote ID: {}, tokenId: {}, weight: {}", [
    voteId.toString(),
    vote.voter,
    abstainedChoice.toString(),
  ]);
}
