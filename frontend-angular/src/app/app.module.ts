import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { CweListComponent } from './cwe-list/cwe-list.component';
import { CwePageComponent } from './cwe-list/cwe-page/cwe-page.component';
import { Cwe22Component } from './cwe-list/cwe-page/cwe22/cwe22.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CweListComponent,
    CwePageComponent,
    Cwe22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
