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
  MatMenuModule, MatSelectModule,
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
import { AdminComponent } from './admin/admin.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import {CurrencyConverterComponent} from './currency-converter/currency-converter.component';
import { ForexComponent } from './forex/forex.component';

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
    CinemaPipe,
    AdminComponent,
    LoginComponent,
    CurrencyConverterComponent,
    ForexComponent
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
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
