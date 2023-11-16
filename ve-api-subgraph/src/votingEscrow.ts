import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  VotingEscrow,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  Supply as SupplyEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  VoteOwnershipTransferred as VoteOwnershipTransferredEvent
} from '../generated/VotingEscrow/VotingEscrow'
import { Deposit, Withdraw, Supply, Transfer, Approval, VoteOwnershipTransferred } from '../generated/schema'

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.provider = event.params.provider.toHexString()
  entity.tokenId = event.params.tokenId
  entity.value = event.params.value
  entity.ts = event.params.ts
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.provider = event.params.provider.toHexString()
  entity.tokenId = event.params.tokenId
  entity.value = event.params.value
  entity.ts = event.params.ts
  entity.save()
}

export function handleSupply(event: SupplyEvent): void {
  let entity = new Supply(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.prevSupply = event.params.prevSupply
  entity.supply = event.params.supply
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from.toHexString()
  entity.to = event.params.to.toHexString()
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.approved = event.params.approved.toHexString()
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleVoteOwnershipTransferred(event: VoteOwnershipTransferredEvent): void {
  let entity = new VoteOwnershipTransferred(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.previousOwner = event.params.previousOwner.toHexString()
  entity.newOwner = event.params.newOwner.toHexString()
  entity.save()
}
