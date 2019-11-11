import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent,
    FeedbackComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
