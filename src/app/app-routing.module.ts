import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VotingComponent} from './voting/voting.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guard/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'voting',
    canActivate: [AuthGuard],
    component: VotingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
