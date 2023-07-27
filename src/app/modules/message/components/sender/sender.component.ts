import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message-service/message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  message1: any;
  message: any;

  mergedMessages: any[] = [];


  constructor(private messageService: MessageService) {
    this.messageService.message1$.subscribe((message1) => {

      this.mergedMessages = [...this.mergedMessages, message1]
    });
    this.messageService.message$.subscribe((message) => {

      this.mergedMessages = [...this.mergedMessages, message]

    });
   }

  sendMessage1() {
    if(!this.message1){
      return
    }
    this.messageService.sendMessage1({name:'Aayush',message : this.message1});
    this.message1 = '';
  }
}
