import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { BannerComponent } from './component/banner/banner.component';
import { CardComponent } from './component/card/card.component';

import {DataService} from './services/data.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { fromPromise } from 'rxjs/observable/fromPromise';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
