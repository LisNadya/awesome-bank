import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class TransactionFormComponent {
  @Input() isDeposit: boolean = false;
  isSubmitted: boolean = false;
  amountField: FormControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router, private accountService: AccountService) {}

  navigateToMenu(): void {
    this.router.navigateByUrl('/');
  }

  submit(): void {
    this.amountField.markAsTouched();

    if (!this.amountField.valid) return;

    this.isSubmitted = true;
    this.accountService.updateAccountTransaction(
      this.amountField.value,
      this.isDeposit
    );
  }
}
