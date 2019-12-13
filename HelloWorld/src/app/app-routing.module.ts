import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {CinemaComponent} from './cinema/cinema.component';
import {CurrencyConverterComponent} from './currency-converter/currency-converter.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'form', component: FormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'currencyconverter', component: CurrencyConverterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent}, /* canActivate: [AuthGuard], data: [target: ['main']] */
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
