import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  FactoryRegistry,
  Approve as ApproveEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetManagedRewardsFactory as SetManagedRewardsFactoryEvent,
  Unapprove as UnapproveEvent
} from '../generated/FactoryRegistry/FactoryRegistry'
import { Approve, Initialized, OwnershipTransferred, SetManagedRewardsFactory, Unapprove } from '../generated/schema'

export function handleApprove(event: ApproveEvent): void {
  let entity = new Approve(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.poolFactory = event.params.poolFactory.toHexString()
  entity.votingRewardsFactory = event.params.votingRewardsFactory.toHexString()
  entity.gaugeFactory = event.params.gaugeFactory.toHexString()
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.version = event.params.version
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.previousOwner = event.params.previousOwner.toHexString()
  entity.newOwner = event.params.newOwner.toHexString()
  entity.save()
}

export function handleSetManagedRewardsFactory(event: SetManagedRewardsFactoryEvent): void {
  let entity = new SetManagedRewardsFactory(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.newRewardsFactory = event.params._newRewardsFactory.toHexString()
  entity.save()
}

export function handleUnapprove(event: UnapproveEvent): void {
  let entity = new Unapprove(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.poolFactory = event.params.poolFactory.toHexString()
  entity.votingRewardsFactory = event.params.votingRewardsFactory.toHexString()
  entity.gaugeFactory = event.params.gaugeFactory.toHexString()
  entity.save()
}
