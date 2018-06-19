// app-routing.module.ts

/*importing the Routes and the RoutesModule and all of our components required for routing*/
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CreateComponent } from './views/create/create.component';
import { EditComponent } from './views/edit/edit.component';
import { IndexComponent } from './views/index/index.component';

import { AuthGuard } from './auth/auth-guard.service';

/* Register our routes */
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreateComponent,  canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
    { path: 'index', component: IndexComponent, canActivate: [AuthGuard] }
];


@NgModule({
    // we have to Import the Router Module
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}