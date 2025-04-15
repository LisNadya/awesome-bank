import { Component } from '@angular/core';
import { TransactionFormComponent } from '../../components/transaction-form/transaction-form.component';

@Component({
  selector: 'account-withdraw',
  templateUrl: './account-withdraw.component.html',
  imports: [TransactionFormComponent],
})
export class AccountWithdrawComponent {}
