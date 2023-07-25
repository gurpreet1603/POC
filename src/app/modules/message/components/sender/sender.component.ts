import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message-service/message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  message1: string='';
  receivedMessages1: any[] = [];


  constructor(private messageService: MessageService) {
    this.messageService.message1$.subscribe((message1) => {
      this.receivedMessages1.push(message1);
    });
   }

  sendMessage1() {
    if(!this.message1){
      return
    }
    this.messageService.sendMessage1(this.message1);
    this.message1 = '';
  }
}
