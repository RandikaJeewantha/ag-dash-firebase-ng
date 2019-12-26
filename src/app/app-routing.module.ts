import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './modules/verify-email/verify-email.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { SecureInnerPagesGuard } from './shared/services/auth/secure-inner-pages.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
      { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
