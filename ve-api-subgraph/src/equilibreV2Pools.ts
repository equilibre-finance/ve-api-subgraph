import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  EquilibreV2Pool,
  Burn as BurnEvent,
  Collect as CollectEvent,
  CollectProtocol as CollectProtocolEvent,
  Flash as FlashEvent,
  IncreaseObservationCardinalityNext as IncreaseObservationCardinalityNextEvent,
  Initialize as InitializeEvent,
  Mint as MintEvent,
  SetFeeProtocol as SetFeeProtocolEvent,
  Swap as SwapEvent
} from '../generated/EquilibreV2Pool/EquilibreV2Pool'
import {
  Burn,
  Collect,
  CollectProtocol,
  Flash,
  IncreaseObservationCardinalityNext,
  Initialize,
  Mint,
  SetFeeProtocol,
  Swap
} from '../generated/schema'

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.tickLower = BigInt.fromI32(event.params.tickLower)
  entity.tickUpper = BigInt.fromI32(event.params.tickUpper)
  entity.amount = event.params.amount
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleCollect(event: CollectEvent): void {
  let entity = new Collect(event.transaction.hash.toHex() + '-' + event.logIndex.toString())  
  entity.recipient = event.params.recipient.toHexString()  
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleCollectProtocol(event: CollectProtocolEvent): void {
  let entity = new CollectProtocol(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()
  entity.recipient = event.params.recipient.toHexString()
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleFlash(event: FlashEvent): void {
  let entity = new Flash(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()
  entity.recipient = event.params.recipient.toHexString()
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.save()
}

export function handleIncreaseObservationCardinalityNext(event: IncreaseObservationCardinalityNextEvent): void {
  let entity = new IncreaseObservationCardinalityNext(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.observationCardinalityNextOld = BigInt.fromI32(event.params.observationCardinalityNextOld)
  entity.observationCardinalityNextNew = BigInt.fromI32(event.params.observationCardinalityNextNew)
  entity.save()
}

export function handleInitialize(event: InitializeEvent): void {
  let entity = new Initialize(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sqrtPriceX96 = event.params.sqrtPriceX96
  entity.tick = BigInt.fromI32(event.params.tick)
  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()  
  entity.tickLower = BigInt.fromI32(event.params.tickLower)
  entity.tickUpper = BigInt.fromI32(event.params.tickUpper)
  entity.amount = event.params.amount
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
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

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender.toHexString()
  entity.recipient = event.params.recipient.toHexString()
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.sqrtPriceX96 = event.params.sqrtPriceX96
  entity.liquidity = event.params.liquidity
  entity.tick = BigInt.fromI32(event.params.tick)
  entity.save()
}
