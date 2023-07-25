import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendreceiveComponent } from './components/sendreceive/sendreceive.component';

const routes: Routes = [
  { path: 'messages', component: SendreceiveComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
