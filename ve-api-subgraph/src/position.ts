import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  Position,
  PositionPeriodSecondsInRange as PositionPeriodSecondsInRangeEvent
} from '../generated/Position/Position'
import { PositionPeriodSecondsInRange } from '../generated/schema'

export function handlePositionPeriodSecondsInRange(event: PositionPeriodSecondsInRangeEvent): void {
  let entity = new PositionPeriodSecondsInRange(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.period = event.params.period
  entity.owner = event.params.owner.toHexString()
  entity.index = event.params.index
  entity.tickLower = event.params.tickLower
  entity.tickUpper = event.params.tickUpper
  entity.periodSecondsInsideX96 = event.params.periodSecondsInsideX96
  entity.save()
}
