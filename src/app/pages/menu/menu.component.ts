import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Account, TransactionType } from '../../models/account.model';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrl: 'menu.component.scss',
  imports: [MatButtonModule, MatCardModule],
})
export class MenuComponent {
  showExit: boolean = false;
  showMainMenu: boolean = true;
  transactionType: TransactionType = '';

  accounts: Account[] = [];

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.showMenuSelection();
  }

  selectAccount(id: string): void {
    this.accountService.selectAccount(id);
    this.navigateToPage(this.transactionType);
  }

  navigateToPage(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }

  showAccountSelection(type: TransactionType): void {
    this.showMainMenu = false;
    this.transactionType = type;
  }

  showMenuSelection(): void {
    this.showMainMenu = true;
    this.showExit = false;
    this.transactionType = '';
    this.accountService.selectAccount('');
  }

  exitMenu(): void {
    this.showExit = true;
  }
}
