import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  SinkManager,
  ClaimRebaseAndGaugeRewards as ClaimRebaseAndGaugeRewardsEvent,
  ConvertVARA as ConvertVARAEvent,
  ConvertVe as ConvertVeEvent
} from '../generated/SinkManager/SinkManager'
import { ClaimRebaseAndGaugeRewards, ConvertVARA, ConvertVe } from '../generated/schema'

export function handleClaimRebaseAndGaugeRewards(event: ClaimRebaseAndGaugeRewardsEvent): void {
  let entity = new ClaimRebaseAndGaugeRewards(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.who = event.params.who.toHexString()
  entity.amountResidual = event.params.amountResidual
  entity.amountRewarded = event.params.amountRewarded
  entity.amountRebased = event.params.amountRebased
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleConvertVARA(event: ConvertVARAEvent): void {
  let entity = new ConvertVARA(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.who = event.params.who.toHexString()
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleConvertVe(event: ConvertVeEvent): void {
  let entity = new ConvertVe(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.who = event.params.who.toHexString()
  entity.tokenId = event.params.tokenId
  entity.tokenIdV2 = event.params.tokenIdV2
  entity.amount = event.params.amount
  entity.lockEnd = event.params.lockEnd
  entity.timestamp = event.params.timestamp
  entity.save()
}
