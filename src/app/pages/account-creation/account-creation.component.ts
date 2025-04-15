import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account-creation',
  templateUrl: './account-creation.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class AccountCreationComponent {
  isSubmitted: boolean = false;
  accountNameField: FormControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router, private accountService: AccountService) {}

  navigateToMenu(): void {
    this.router.navigateByUrl('/');
  }

  create(): void {
    this.accountNameField.markAsTouched();

    if (!this.accountNameField.valid) return;

    this.isSubmitted = true;
    this.accountService.addAccount(this.accountNameField.value);
  }
}
