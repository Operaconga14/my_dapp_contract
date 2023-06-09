import { Injectable } from '@angular/core';
import { MessageList } from '../models/message-list';

@Injectable({
  providedIn: 'root'
})
export class MessagesListService {

  messagelist: Array<MessageList> = ([
    {
      subject: 'How Are you',
      message: 'Hello Shidbji uvshdh'
    },
    {
      subject: 'Jsksksks',
      message: 'SWVWGWGWYWGWy'
    }
  ])

  constructor() { }

  getMessages() {
    return this.messagelist
  }
}
