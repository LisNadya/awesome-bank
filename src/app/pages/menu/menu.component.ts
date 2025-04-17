import { Component, OnInit } from '@angular/core';
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
export class MenuComponent implements OnInit {
  showExit: boolean = false;
  showMainMenu: boolean = true;
  selectedMenu: TransactionType = '';

  accounts: Account[] = [];

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    this.setAccountList();
    this.showMenuSelection();
  }

  selectAccount(id: string): void {
    this.accountService.accountId = id;
    this.navigateToPage(this.selectedMenu);
  }

  navigateToPage(pageUrl: string) {
    this.router.navigateByUrl(pageUrl);
  }

  showAccountSelection(type: TransactionType): void {
    this.showMainMenu = false;
    this.selectedMenu = type;
  }

  showMenuSelection(): void {
    this.showMainMenu = true;
    this.showExit = false;
    this.selectedMenu = '';
    this.accountService.accountId = '';
  }

  exitMenu(): void {
    this.showExit = true;
  }

  private setAccountList(): void {
    this.accounts = this.accountService.accountList;
  }
}
