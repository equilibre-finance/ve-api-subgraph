import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  EquilibreV2Factory,
  PoolCreated,
  FeeAmountEnabled,
  OwnerChanged,
  FeeSetterChanged,
  FeeCollectorChanged,
  ImplementationChanged,
  SetFeeProtocol,
  SetPoolFeeProtocol
} from '../generated/EquilibreV2Factory/EquilibreV2Factory'
import { Pool, Fee, Owner, FeeSetter, FeeCollector, Implementation, FeeProtocol, PoolFeeProtocol } from '../generated/schema'

export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool.toHexString())
  pool.token0 = event.params.token0.toHexString()
  pool.token1 = event.params.token1.toHexString()
  pool.fee = event.params.fee
  pool.tickSpacing = event.params.tickSpacing
  pool.save()
}

export function handleFeeAmountEnabled(event: FeeAmountEnabled): void {
  let fee = new Fee(event.params.fee.toString())
  fee.tickSpacing = event.params.tickSpacing
  fee.save()
}

export function handleOwnerChanged(event: OwnerChanged): void {
  let owner = new Owner(event.params.newOwner.toHexString())
  owner.oldOwner = event.params.oldOwner.toHexString()
  owner.save()
}

export function handleFeeSetterChanged(event: FeeSetterChanged): void {
  let feeSetter = new FeeSetter(event.params.newFeeSetter.toHexString())
  feeSetter.oldFeeSetter = event.params.oldFeeSetter.toHexString()
  feeSetter.save()
}

export function handleFeeCollectorChanged(event: FeeCollectorChanged): void {
  let feeCollector = new FeeCollector(event.params.newFeeCollector.toHexString())
  feeCollector.oldFeeCollector = event.params.oldFeeCollector.toHexString()
  feeCollector.save()
}

export function handleImplementationChanged(event: ImplementationChanged): void {
  let implementation = new Implementation(event.params.newImplementation.toHexString())
  implementation.oldImplementation = event.params.oldImplementation.toHexString()
  implementation.save()
}

export function handleSetFeeProtocol(event: SetFeeProtocol): void {
  let feeProtocol = new FeeProtocol(event.transaction.hash.toHexString())
  feeProtocol.oldFeeProtocol0 = event.params.oldFeeProtocol0
  feeProtocol.oldFeeProtocol1 = event.params.oldFeeProtocol1
  feeProtocol.newFeeProtocol0 = event.params.newFeeProtocol0
  feeProtocol.newFeeProtocol1 = event.params.newFeeProtocol1
  feeProtocol.save()
}

export function handleSetPoolFeeProtocol(event: SetPoolFeeProtocol): void {
  let poolFeeProtocol = new PoolFeeProtocol(event.params.pool.toHexString())
  poolFeeProtocol.oldFeeProtocol0 = event.params.oldFeeProtocol0
  poolFeeProtocol.oldFeeProtocol1 = event.params.oldFeeProtocol1
  poolFeeProtocol.newFeeProtocol0 = event.params.newFeeProtocol0
  poolFeeProtocol.newFeeProtocol1 = event.params.newFeeProtocol1
  poolFeeProtocol.save()
}
