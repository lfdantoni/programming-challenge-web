import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PostService } from './../services/post.service';
import { IContact } from './../models/contact';
import { BootstrapModule } from 'bootstrap';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [PostService]
})
export class ContactListComponent implements OnInit {
  dataContacts: IContact[];
  @Output() selectedContact = new EventEmitter<IContact>();

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getContacts().subscribe(dataResult => {
      this.dataContacts = dataResult;
    });
  }

  select(contact: IContact) {
    this.selectedContact.emit(contact);
  }
}
