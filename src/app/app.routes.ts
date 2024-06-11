import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjMzY2MzMiIsImlhdCI6MTcxNzUyMDU2MywiZXhwIjoxNzE3NTIwNjYzfQ.kOO8f1DKMAFTeaoV5V9whQyR1NHg86PBj1oBNf7cn6g';
  const jwtHelper = new JwtHelperService();
  if (token === null) return false;
  return !jwtHelper.isTokenExpired(token);
};

const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjMzY2MzMiIsImlhdCI6MTcxNzUyMDU2MywiZXhwIjoxNzE3NTIwNjYzfQ.kOO8f1DKMAFTeaoV5V9whQyR1NHg86PBj1oBNf7cn6g';
  const role = route.data['role'];
  console.log(jwtDecode(token));

  if (isAuthenticated()) {
    return true;
  } else {
    return false;
  }
};

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [canActivateTeam],
    data: { role: 1 },
  },
  { path: 'product/detail', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
