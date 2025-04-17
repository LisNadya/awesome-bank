import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Transaction } from '../../models/account.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'account-statement',
  templateUrl: './account-statement.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class AccountStatementComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  displayedColumns: string[] = ['transactionDate', 'amount', 'balance'];
  transactionHistory: MatTableDataSource<Transaction> =
    new MatTableDataSource<Transaction>([]);

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.transactionHistory.data =
      this.accountService.accountTransactionHistory;
  }

  ngAfterViewInit() {
    this.transactionHistory.paginator = this.paginator;
    this.transactionHistory.sort = this.sort;
  }

  navigateToMenu(): void {
    this.router.navigateByUrl('/');
  }
}
