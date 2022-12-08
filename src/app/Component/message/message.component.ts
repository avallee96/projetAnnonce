import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/Model/message.model';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  id!:number
  message!:Message

  constructor(private route:ActivatedRoute, mservice:MessageService){}
  
  ngOnInit(): void {
    this.id =+ this.route.snapshot.params['id'];
    this.message = new Message()
  }


  

}
