import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbdCarouselCOnfigComponent } from './header/ngbd-carousel-config/ngbd-carousel-config.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    HeaderComponent,
    DatepickerComponent,
    NgbdCarouselCOnfigComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
