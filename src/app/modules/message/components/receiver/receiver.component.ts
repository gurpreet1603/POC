import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message-service/message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {
  message: any;
  message1: any;


  mergedMessages: any[] = [];


  constructor(private messageService: MessageService) {
    this.messageService.message$.subscribe((message:any) => {
      if(message){
        this.mergedMessages = [...this.mergedMessages, message]
      }

    });
    this.messageService.message1$.subscribe((message1:any) => {
      if(message1){
        this.mergedMessages = [...this.mergedMessages, message1]
      }

    });
  }

  sendMessage() {
    if(!this.message){
      return
    }
    this.messageService.sendMessage({name:'kapil',message : this.message});
    this.message = '';
  }
}

