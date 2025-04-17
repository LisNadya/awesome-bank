import { Injectable } from '@angular/core';
import { Account, Transaction } from '../models/account.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accounts: Account[] = [];
  private selectedAccountId: string = '';

  get accountList(): Account[] {
    return this.accounts;
  }

  get accountBalance(): number {
    return this.getCurrentAccount()?.accountBalance ?? 0;
  }

  get accountName(): string {
    return this.getCurrentAccount()?.accountName ?? '';
  }

  get accountTransactionHistory(): Transaction[] {
    return this.getCurrentAccount()?.transactionHistory ?? [];
  }

  set accountId(value: string) {
    this.selectedAccountId = value;
  }

  addAccount(name: string): void {
    const accountDetail: Account = {
      id: Guid.create().toString(),
      accountName: name,
      accountBalance: 0,
      transactionHistory: [],
      dateTimeUpdated: this.getCurrentDateTime(),
      dateTimeCreated: this.getCurrentDateTime(),
    };

    this.accounts.push(accountDetail);
  }

  updateAccountTransaction(amount: number, isDeposit: boolean = false): void {
    const account = this.getCurrentAccount();

    if (!account) return;

    const transactionAmount = isDeposit ? amount : -amount;
    const transactionBalance = account.accountBalance + transactionAmount;

    account.accountBalance = transactionBalance;
    account.transactionHistory.push({
      transactionDate: this.getCurrentDateTime(),
      balance: transactionBalance,
      amount: transactionAmount,
    });
    account.dateTimeUpdated = this.getCurrentDateTime();
  }

  private getCurrentAccount(): Account | undefined {
    return this.accounts.find(({ id }) => id === this.selectedAccountId);
  }

  private getCurrentDateTime(): string {
    return new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' });
  }
}
