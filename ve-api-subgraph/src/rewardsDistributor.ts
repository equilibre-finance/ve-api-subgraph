import { BigInt } from '@graphprotocol/graph-ts'
import {
  RewardsDistributor,
  CheckpointToken as CheckpointTokenEvent,
  Claimed as ClaimedEvent,
  Initialized as InitializedEvent
} from '../generated/RewardsDistributor/RewardsDistributor'
import { CheckpointToken, Claimed, Initialized } from '../generated/schema'

export function handleCheckpointToken(event: CheckpointTokenEvent): void {
  let entity = new CheckpointToken(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.time = event.params.time
  entity.tokens = event.params.tokens
  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.tokenId = event.params.tokenId
  entity.epochStart = event.params.epochStart
  entity.epochEnd = event.params.epochEnd
  entity.amount = event.params.amount
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.version = event.params.version
  entity.save()
}
