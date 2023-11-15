import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  GaugeFactoryForERC721,
  GaugeCreated as GaugeCreatedEvent,
  ImplementationChanged as ImplementationChangedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from '../generated/GaugeFactoryForERC721/GaugeFactoryForERC721'
import { GaugeCreated, ImplementationChanged, Initialized, OwnershipTransferred } from '../generated/schema'

export function handleGaugeCreated(event: GaugeCreatedEvent): void {
  let entity = new GaugeCreated(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.gauge = event.params.gauge.toHexString()
  entity.pool = event.params.pool.toHexString()
  entity.save()
}

export function handleImplementationChanged(event: ImplementationChangedEvent): void {
  let entity = new ImplementationChanged(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.oldImplementation = event.params.oldImplementation.toHexString()
  entity.newImplementation = event.params.newImplementation.toHexString()
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
