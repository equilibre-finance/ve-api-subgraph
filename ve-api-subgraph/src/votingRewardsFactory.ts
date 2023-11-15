import { BigInt } from '@graphprotocol/graph-ts'
import {
  VotingRewardsFactory,
  Initialized as InitializedEvent
} from '../generated/VotingRewardsFactory/VotingRewardsFactory'
import { Initialized } from '../generated/schema'

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.version = event.params.version
  entity.save()
}
