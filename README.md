A Angular project to use normal day to day functions


#Examples

```
service file :

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

```
```
app.component.ts file :
import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div>
           <ul>
                 <li *ngFor="let message of mail.messages">{{message.text}}</li>
           </ul>
               <app-simple-form *ngFor="let message of mail.messages"
               [message]="message.text"
               (update)="onUpdate(message.id, $event.text)">
               </app-simple-form>
           
     </div>
  `,
  styles: [`
     app-simple-form {
       margin-bottom: 10px;
     }
  `]
})
export class AppComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  constructor(
    @Inject('mail') private mail
  ) { }
}

```

```
app.module.ts file :
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

```
 getURLSlug('My Favourite Song');
 //=> 'my-favorite-songs'
```

