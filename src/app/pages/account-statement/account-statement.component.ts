import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Transaction } from '../../models/account.model';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'account-statement',
  templateUrl: './account-statement.component.html',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatCardModule],
})
export class AccountStatementComponent {
  displayedColumns: string[] = ['transactionDate', 'amount', 'balance'];
  transactionHistory: Transaction[] = [];

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    this.transactionHistory =
      this.accountService.getAccountTransactionHistory();
  }

  navigateToMenu(): void {
    this.router.navigateByUrl('menu');
  }
}
