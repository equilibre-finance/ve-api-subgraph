import { Address } from '@graphprotocol/graph-ts'
import {
  NonfungibleTokenPositionDescriptor,
  OwnershipTransferred as OwnershipTransferredEvent
} from '../generated/NonfungibleTokenPositionDescriptor/NonfungibleTokenPositionDescriptor'
import { OwnershipTransferred } from '../generated/schema'

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.previousOwner = event.params.previousOwner.toHexString()
  entity.newOwner = event.params.newOwner.toHexString()
  entity.save()
}
