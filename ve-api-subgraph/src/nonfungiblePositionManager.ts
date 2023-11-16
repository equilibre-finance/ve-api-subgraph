import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  NonfungiblePositionManager,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Collect as CollectEvent,
  DecreaseLiquidity as DecreaseLiquidityEvent,
  IncreaseLiquidity as IncreaseLiquidityEvent,
  SwitchAttachment as SwitchAttachmentEvent,
  Transfer as TransferEvent
} from '../generated/NonfungiblePositionManager/NonfungiblePositionManager'
import { Approval, ApprovalForAll, Collect, DecreaseLiquidity, IncreaseLiquidity, SwitchAttachment, Transfer } from '../generated/schema'

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.operator = event.params.operator.toHexString()
  entity.approved = event.params.approved
  entity.save()
}

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

export function handleIncreaseLiquidity(event: IncreaseLiquidityEvent): void {
  let entity = new IncreaseLiquidity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
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

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from.toHexString()
  entity.to = event.params.to.toHexString()  
  entity.save()
}
