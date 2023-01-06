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
import { Cwe331Component } from './cwe-list/cwe-page/cwe331/cwe331.component';
import { Cwe209Component } from './cwe-list/cwe-page/cwe209/cwe209.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { PageA1Component } from './action-panel/page-a1/page-a1.component';
import { ChangePasswordFormComponent } from './action-panel/page-a1/change-password-form/change-password-form.component';
import { UsersA1ListComponent } from './action-panel/page-a1/users-list/users-list.component';
import { UsersA2ListComponent } from './action-panel/page-a2/users-list/users-list.component';
import { HTTPChangePasswordFormComponent } from './action-panel/page-a1/http-change-password-form/http-change-password-form.component';
import { PageA2Component } from './action-panel/page-a2/page-a2.component';
import { LoginFormComponent } from './action-panel/page-a2/login-form/login-form.component';
import { Base64decoderComponent } from './action-panel/page-a2/base64decoder/base64decoder.component';
import { PasswdHashDictionaryComponent } from './action-panel/page-a2/passwd-hash-dictionary/passwd-hash-dictionary.component';
import { PageA3Component } from './action-panel/page-a3/page-a3.component';
import { PageA4Component } from './action-panel/page-a4/page-a4.component';
import { PageA5Component } from './action-panel/page-a5/page-a5.component';
import { PageA6Component } from './action-panel/page-a6/page-a6.component';
import { PageA7Component } from './action-panel/page-a7/page-a7.component';
import { PageA8Component } from './action-panel/page-a8/page-a8.component';
import { PageA9Component } from './action-panel/page-a9/page-a9.component';
import { PageA10Component } from './action-panel/page-a10/page-a10.component';
import { A3LoginFormComponent } from './action-panel/page-a3/a3-login-form/a3-login-form.component';
import { CreateResourceComponent } from './action-panel/page-a8/create-resource/create-resource.component';
import { DigitalSignComponent } from './action-panel/page-a8/digital-sign/digital-sign.component';
import { VerifyResourceComponent } from './action-panel/page-a8/verify-resource/verify-resource.component';
import { DigitalSignVerifyComponent } from './action-panel/page-a8/digital-sign-verify/digital-sign-verify.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CwePageComponent,
    Cwe22Component,
    SideNavComponent,
    Cwe89Component,
    DialogComponent,
    Cwe331Component,
    Cwe209Component,
    ActionPanelComponent,
    PageA1Component,
    ChangePasswordFormComponent,
    UsersA1ListComponent,
    UsersA2ListComponent,
    HTTPChangePasswordFormComponent,
    PageA2Component,
    LoginFormComponent,
    Base64decoderComponent,
    PasswdHashDictionaryComponent,
    PageA3Component,
    PageA4Component,
    PageA5Component,
    PageA6Component,
    PageA7Component,
    PageA8Component,
    PageA9Component,
    PageA10Component,
    A3LoginFormComponent,
    CreateResourceComponent,
    DigitalSignComponent,
    VerifyResourceComponent,
    DigitalSignVerifyComponent
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
