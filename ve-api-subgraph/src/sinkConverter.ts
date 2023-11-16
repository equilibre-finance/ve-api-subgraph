import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  SinkConverter,
  Approval as ApprovalEvent,
  Initialized as InitializedEvent,
  Swap as SwapEvent,
  Transfer as TransferEvent
} from '../generated/SinkConverter/SinkConverter'
import { Approval, Initialized, Swap, Transfer } from '../generated/schema'

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

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()  
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from.toHexString()
  entity.to = event.params.to.toHexString()
  entity.value = event.params.value
  entity.save()
}
