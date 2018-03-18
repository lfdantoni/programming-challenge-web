import { Component, OnInit } from '@angular/core';
import { IContact } from './../models/contact';
import { ContactListComponent } from './../contact-list/contact-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  selectedContact: IContact;
  contactNameModif: string;

  setContact(contact: IContact) {
    const activeContact = this.selectedContact;

    if (activeContact != null) {
      activeContact.selected = false;
    }

    contact.selected = true;
    this.selectedContact = contact;
  }


}
