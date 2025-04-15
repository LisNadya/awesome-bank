import { Injectable } from '@angular/core';
import { Account, Transaction } from '../models/account.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts: Account[] = [];
  selectedAccountId: string = '';

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

  selectAccount(id: string): void {
    this.selectedAccountId = id;
  }

  updateAccountTransaction(amount: number, isAdd: boolean = false): void {
    const account = this.getCurrentAccount();

    if (!account) return;

    const transactionAmount = isAdd ? amount : -amount;
    const transactionBalance = account.accountBalance + transactionAmount;

    account.accountBalance = transactionBalance;
    account.transactionHistory.push({
      transactionDate: this.getCurrentDateTime(),
      balance: transactionBalance,
      amount: transactionAmount,
    });
    account.dateTimeUpdated = this.getCurrentDateTime();
  }

  getAccountTransactionHistory(): Transaction[] {
    const account = this.getCurrentAccount();

    if (!account) return [];

    return account.transactionHistory;
  }

  getCurrentAccount(): Account | undefined {
    return this.accounts.find(({ id }) => id === this.selectedAccountId);
  }

  private getCurrentDateTime(): string {
    return new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' });
  }
}
