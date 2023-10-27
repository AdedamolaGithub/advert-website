import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  // Only import this, not RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
