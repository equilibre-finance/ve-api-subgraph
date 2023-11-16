import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  VotingEscrow,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  Supply as SupplyEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent
} from '../generated/VotingEscrow/VotingEscrow'
import { Deposit, Withdraw, Transfer, Approval } from '../generated/schema'

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
  entity.ts = event.params.ts
  entity.save()
}

export function handleSupply(event: SupplyEvent): void {
  
  
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from.toHexString()
  entity.to = event.params.to.toHexString()
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.owner = event.params.owner.toHexString()
  entity.save()
}
