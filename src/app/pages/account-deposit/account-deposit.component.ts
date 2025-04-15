import { Component } from '@angular/core';
import { TransactionFormComponent } from '../../components/transaction-form/transaction-form.component';

@Component({
  selector: 'account-deposit',
  templateUrl: './account-deposit.component.html',
  imports: [TransactionFormComponent],
})
export class AccountDepositComponent {}
