import { BigInt } from "@graphprotocol/graph-ts"
import {
  WBNB,
  Approval,
  Transfer,
  Deposit,
  Withdrawal
} from "../generated/WBNB/WBNB"
import { ExampleEntity, Deposit as DepositEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleTransfer(event: Transfer): void {}

export function handleDeposit(event: Deposit): void {
  const deposit = new DepositEntity(event.transaction.hash.toHex());
  deposit.amount = event.transaction.value;
  deposit.user = event.transaction.from.toHexString();
  deposit.timestamp = event.block.timestamp;
  deposit.save();
}

export function handleWithdrawal(event: Withdrawal): void {}
