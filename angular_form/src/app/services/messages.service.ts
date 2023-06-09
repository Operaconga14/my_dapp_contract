import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getContract, readContract } from '@wagmi/core';
import { environment } from 'src/environments/enviroment';
import { Web3Service } from './web3.service';
import { Messanger } from '../models/messanger';
const MessageABI = require('../../assets/abi/messanger.json');

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messagelDetail = <Messanger> {
    subject: 'Hello',
    message: 'How are you doing HShshshMessagesServiceMessagesServiceMessagesServiceMessagesServiceMessagesServiceMessagesServiceMessagesServiceMessagesServiceMessagesService'
  }

  constructor() { }

  get() {
    return this.messagelDetail
  }

  async getMessangerContract(address: string){
    const contract = await getContract({
      address: environment.MessangerAddress as `0x${string}`,
      abi: MessageABI
    })
    return contract
  }

  async returnMessage () {
    const data = await readContract ({
      address: environment.MessangerAddress as `0x${string}`,
      abi: MessageABI,
      functionName: "readMessage",
      args: []
    })
    return data
  }
  

}
