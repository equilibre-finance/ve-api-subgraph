import { Address } from '@graphprotocol/graph-ts'
import {
  ManagedRewardsFactory,
  ManagedRewardCreated as ManagedRewardCreatedEvent
} from '../generated/ManagedRewardsFactory/ManagedRewardsFactory'
import { ManagedRewardCreated } from '../generated/schema'

export function handleManagedRewardCreated(event: ManagedRewardCreatedEvent): void {
  let entity = new ManagedRewardCreated(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.voter = event.params.voter.toHexString()
  entity.lockedManagedReward = event.params.lockedManagedReward.toHexString()
  entity.freeManagedReward = event.params.freeManagedReward.toHexString()
  entity.save()
}
