import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'account-transaction',
  templateUrl: './account-transaction.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class AccountTransactionComponent implements OnInit {
  isDeposit: boolean = false;
  isSubmitted: boolean = false;

  amountField: FormControl = new FormControl(null, [Validators.required]);

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    if (!this.accountService.accountId) {
      this.navigateToMenu();
      return;
    }

    this.isDeposit = this.router.url.includes('deposit');
  }

  navigateToMenu(): void {
    this.router.navigateByUrl('/');
  }

  submitTransaction(): void {
    this.amountField.markAsTouched();
    if (!this.amountField.valid) return;

    this.isSubmitted = true;
    this.accountService.updateAccountTransaction(
      this.amountField.value,
      this.isDeposit
    );
  }
}
