import { Component, Input, Output, OnInit } from '@angular/core';
import { IContact } from './../models/contact';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  @Input() contactSelectedData: IContact;
  constructor() { }

}
