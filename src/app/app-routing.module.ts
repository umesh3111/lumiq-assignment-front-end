import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialpadComponent } from './components/dialpad/dialpad.component'


const routes: Routes = [
  { path: 'rescue', component: DialpadComponent },
  { path: '', component: DialpadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
