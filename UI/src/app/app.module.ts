import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZensarUsersListComponent } from './zensar-users-list/zensar-users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ZensarUserCardComponent } from './zensar-user-card/zensar-user-card.component';
import { ZensarModalPopupComponent } from './zensar-modal-popup/zensar-modal-popup.component';
import { ZensarUserComponent } from './zensar-user/zensar-user.component';

@NgModule({
  declarations: [AppComponent, ZensarUsersListComponent, ZensarUserCardComponent, ZensarModalPopupComponent, ZensarUserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
