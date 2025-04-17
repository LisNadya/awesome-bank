import { Routes } from '@angular/router';
import { AccountTransactionComponent } from './pages/account-transaction/account-transaction.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AccountStatementComponent } from './pages/account-statement/account-statement.component';
import { AccountCreationComponent } from './pages/account-creation/account-creation.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'create-account',
    component: AccountCreationComponent,
  },
  {
    path: 'deposit',
    component: AccountTransactionComponent,
  },
  {
    path: 'withdraw',
    component: AccountTransactionComponent,
  },
  {
    path: 'view-statement',
    component: AccountStatementComponent,
  },
];
