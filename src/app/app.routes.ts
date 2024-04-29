import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DifferDemoComponent } from './components/differ-demo/differ-demo.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'create-bin',component:CreateBinComponent,canActivate:[authGuard]},
  {path:'about',loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent)},
  {path:'',component:HomeComponent},
  {path:'snippet/:id',component:ViewSnippetComponent},
  {path:'demo',component:DifferDemoComponent},
  {path:'**',component:NotFoundComponent},
];
