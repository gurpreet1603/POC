import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { FormsModule } from '@angular/forms';
import { SendreceiveComponent } from './components/sendreceive/sendreceive.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SenderComponent } from './components/sender/sender.component';


@NgModule({
  declarations: [

    SendreceiveComponent,
    SenderComponent,
    ReceiverComponent,

  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule
  ]
})
export class MessageModule { }
