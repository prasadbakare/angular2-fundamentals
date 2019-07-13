import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
              <input #myInput type="text" [(ngModel)]="message" [ngClass]="{mouseDown:isMousedown}" (mousedown)="isMousedown = true" (mouseup)="isMousedown = false" >
              <button class="white bg-black code" (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
     :host {
       display:flex;
       flex-direction:column;
     }

     * {
       font-family: monospace;
     }

     input:focus {
       font-weight: bold;
       outline:none
     }


     button {
       border:none;
       outline:none;
       cursor:pointer;
     }

     .mouseDown{
       border-bottom: 2px solid green;
     }

     `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  mouseDown() {

  }

  constructor() { }

  ngOnInit() {
  }

}
