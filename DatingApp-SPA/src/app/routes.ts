import { MessagesComponent } from './messages/messages.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'members',
    component: MemberListComponent,
    resolve: { user: MemberListResolver },
    canActivate: [AuthGuard]
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent,
    resolve: { user: MemberDetailResolver }
  },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
