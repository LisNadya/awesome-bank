import { Routes } from '@angular/router';
import { AccountDepositComponent } from './pages/account-deposit/account-deposit.component';
import { AccountWithdrawComponent } from './pages/account-withdraw/account-withdraw.component';
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
    component: AccountDepositComponent,
  },
  {
    path: 'withdraw',
    component: AccountWithdrawComponent,
  },
  {
    path: 'view-statement',
    component: AccountStatementComponent,
  },
];
