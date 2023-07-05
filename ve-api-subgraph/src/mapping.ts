import { BigInt, Address, ethereum, log } from "@graphprotocol/graph-ts";
import { Vote } from "../generated/schema"; // Import the generated 'Vote' entity

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

  let vote = new Vote(voteId.toString());
  vote.voter = event.transaction.from.toHexString();
  vote.choice = abstainedChoice;

  vote.save();

  // Print the event data on the screen
  log.info("Abstained Event - Vote ID: {}, Voter: {}, Choice: {}", [
    voteId.toString(),
    vote.voter,
    abstainedChoice.toString()
  ]);
}
