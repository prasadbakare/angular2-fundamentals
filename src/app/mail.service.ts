import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    { id: 0, text: `You got mail` },
    { id: 1, text: `You liked john's messages` },
    { id: 2, text: 'John is your friend' }
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? { id, text } : m
    )
  }
  constructor() { }

}
