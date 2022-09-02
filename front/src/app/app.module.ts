import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './pages/cards/cards.component';
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './components/question/question.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    UsersComponent,
    UserFormComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
