import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './Component/post-list/post-list.component';
import { AuthentificationComponent } from './Component/authentification/authentification.component';
import { PostItemComponent } from './Component/post-item/post-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'PostList', pathMatch: 'full' }, // Redirection vers PostList par défaut
  { path: 'PostList', component: PostListComponent },
  { path: 'PostItem', component: PostItemComponent },
  { path: 'Authentification', component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
