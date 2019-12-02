import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CinemaComponent } from './cinema/cinema.component';
import {HttpClientModule} from '@angular/common/http';
import { CinemaPipe } from './pipes/cinema.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent,
    FeedbackComponent,
    FormComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    CinemaComponent,
    CinemaPipe
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
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
