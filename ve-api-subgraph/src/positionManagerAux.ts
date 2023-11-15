import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  PositionManagerAux,
  Collect as CollectEvent,
  DecreaseLiquidity as DecreaseLiquidityEvent,
  SwitchAttachment as SwitchAttachmentEvent
} from '../generated/PositionManagerAux/PositionManagerAux'
import { Collect, DecreaseLiquidity, SwitchAttachment } from '../generated/schema'

export function handleCollect(event: CollectEvent): void {
  let entity = new Collect(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient.toHexString()
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleDecreaseLiquidity(event: DecreaseLiquidityEvent): void {
  let entity = new DecreaseLiquidity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.tokenId = event.params.tokenId
  entity.liquidity = event.params.liquidity
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleSwitchAttachment(event: SwitchAttachmentEvent): void {
  let entity = new SwitchAttachment(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.tokenId = event.params.tokenId
  entity.oldVeVaraTokenId = event.params.oldVeVaraTokenId
  entity.newVeVaraTokenId = event.params.newVeVaraTokenId
  entity.save()
}
