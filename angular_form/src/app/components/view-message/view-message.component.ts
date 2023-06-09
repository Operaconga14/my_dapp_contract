import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { readContract } from '@wagmi/core';
import { environment } from 'src/environments/enviroment';
import { Web3Service } from 'src/app/services/web3.service';
import { Messanger } from 'src/app/models/messanger';
const MessangerABI = require('../../../assets/abi/messanger.json')
@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent {
 
  subject: string | undefined
  message: string | undefined

  

  constructor(
    private titleService: Title,
    public messageServices: MessagesService,
    private route: ActivatedRoute,
    public w3s: Web3Service
  ) {}

  async ngOnInit() {

    console.log(this.messageServices.returnMessage()) 

    // setTimeout(async ()=> {
    //   console.log(await this.messageServices.returnMessage())
    // }, 100)
    
  }

}
