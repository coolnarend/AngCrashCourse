import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFromComponent } from './template-from/template-from.component';
import { DefaultPageComponent } from './default-page/default-page.component';


const routes: Routes = [
  // { path: 'forms',pathMatch: 'prefix', component:  ContactListComponent}
  { path: '', component: DefaultPageComponent },
  { path: 'forms', component: TemplateFromComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
