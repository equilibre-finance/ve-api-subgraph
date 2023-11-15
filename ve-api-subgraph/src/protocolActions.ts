import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  ProtocolActions,
  CollectProtocol as CollectProtocolEvent,
  FeeAdjustment as FeeAdjustmentEvent,
  SetFeeProtocol as SetFeeProtocolEvent
} from '../generated/ProtocolActions/ProtocolActions'
import { CollectProtocol, FeeAdjustment, SetFeeProtocol } from '../generated/schema'

export function handleCollectProtocol(event: CollectProtocolEvent): void {
  let entity = new CollectProtocol(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()
  entity.recipient = event.params.recipient.toHexString()
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleFeeAdjustment(event: FeeAdjustmentEvent): void {
  let entity = new FeeAdjustment(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.oldFee = event.params.oldFee
  entity.newFee = event.params.newFee
  entity.save()
}

export function handleSetFeeProtocol(event: SetFeeProtocolEvent): void {
  let entity = new SetFeeProtocol(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.feeProtocol0Old = event.params.feeProtocol0Old
  entity.feeProtocol1Old = event.params.feeProtocol1Old
  entity.feeProtocol0New = event.params.feeProtocol0New
  entity.feeProtocol1New = event.params.feeProtocol1New
  entity.save()
}
