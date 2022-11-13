import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CwePageComponent } from './cwe-list/cwe-page/cwe-page.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/cwe-list', pathMatch: 'full' },
  //{ path: 'cwe-list', component: CweListComponent },
  //{ path: 'cwe/:id', component: CwePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
