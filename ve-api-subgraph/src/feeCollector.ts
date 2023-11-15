import { BigInt, Address, ethereum } from '@graphprotocol/graph-ts'
import {
  FeeCollector,
  FeesCollected,
  TreasuryChanged,
  TreasuryFeesChanged
} from '../generated/FeeCollector/FeeCollector'
import { FeesCollectedEntity, TreasuryChangedEntity, TreasuryFeesChangedEntity } from '../generated/schema'

export function handleFeesCollected(event: FeesCollected): void {
  let entity = new FeesCollectedEntity(event.transaction.hash.toHex())
  entity.pool = event.params.pool
  entity.feeDistAmount0 = event.params.feeDistAmount0
  entity.feeDistAmount1 = event.params.feeDistAmount1
  entity.treasuryAmount0 = event.params.treasuryAmount0
  entity.treasuryAmount1 = event.params.treasuryAmount1
  entity.save()
}

export function handleTreasuryChanged(event: TreasuryChanged): void {
  let entity = new TreasuryChangedEntity(event.transaction.hash.toHex())
  entity.oldTreasury = event.params.oldTreasury
  entity.newTreasury = event.params.newTreasury
  entity.save()
}

export function handleTreasuryFeesChanged(event: TreasuryFeesChanged): void {
  let entity = new TreasuryFeesChangedEntity(event.transaction.hash.toHex())
  entity.oldTreasuryFees = event.params.oldTreasuryFees
  entity.newTreasuryFees = event.params.newTreasuryFees
  entity.save()
}
