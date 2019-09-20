import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignItemRowComponent } from './campaign-item-row/campaign-item-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    CampaignDetailsComponent,
    CampaignItemRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
