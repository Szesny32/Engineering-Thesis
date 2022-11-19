import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { CwePageComponent } from './cwe-list/cwe-page/cwe-page.component';
import { Cwe22Component } from './cwe-list/cwe-page/cwe22/cwe22.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Cwe89Component } from './cwe-list/cwe-page/cwe89/cwe89.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CwePageComponent,
    Cwe22Component,
    SideNavComponent,
    Cwe89Component,
    DialogComponent
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
