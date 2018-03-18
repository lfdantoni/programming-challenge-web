import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private http:Http) {

    }
    getContacts() {
        return this.http.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
                        .map(res => res.json());
    }
}