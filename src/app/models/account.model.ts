export interface Account {
  id: string;
  accountName: string;
  accountBalance: number;
  transactionHistory: Transaction[];
  dateTimeUpdated: string;
  dateTimeCreated: string;
}

export interface Transaction {
  transactionDate: string;
  balance: number;
  amount: number;
}

export type TransactionType = 'deposit' | 'view-statement' | 'withdraw' | '';
