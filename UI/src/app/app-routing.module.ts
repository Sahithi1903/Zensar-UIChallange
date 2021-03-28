import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZensarUserComponent } from './zensar-user/zensar-user.component';
import { ZensarUsersListComponent } from './zensar-users-list/zensar-users-list.component';

const routes: Routes = [
  {
    path: '',
    component: ZensarUsersListComponent,
  },
  {
    path: ':id',
    component: ZensarUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
