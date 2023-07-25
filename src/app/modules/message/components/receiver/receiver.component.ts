import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message-service/message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {
  message: any;

  receivedMessages: any[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.message$.subscribe((message:any) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage() {
    if(!this.message){
      return
    }
    this.messageService.sendMessage(this.message);
    this.message = '';
  }
}

