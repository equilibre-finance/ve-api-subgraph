import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  SinkDrain,
  Approval as ApprovalEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from '../generated/SinkDrain/SinkDrain'
import { Approval, Initialized, OwnershipTransferred, Transfer } from '../generated/schema'

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.spender = event.params.spender.toHexString()
  entity.value = event.params.value
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

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from.toHexString()
  entity.to = event.params.to.toHexString()
  entity.value = event.params.value
  entity.save()
}
