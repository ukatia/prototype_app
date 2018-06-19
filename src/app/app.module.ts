// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { CreateComponent } from './views/create/create.component';
import { EditComponent } from './views/edit/edit.component';
import { IndexComponent } from './views/index/index.component';

// app modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

// services
import { CustomerService } from './services/customer-service/customer.service';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    NavBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CustomerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
