import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContainerComponent } from './container/container.component';
import { FavoritePipe } from './pipes/filterItem.pipe';
import { SortPipe} from './pipes/sortItem.pipe';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    ContactListComponent,
    ContainerComponent,
    FavoritePipe,
    SortPipe,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
