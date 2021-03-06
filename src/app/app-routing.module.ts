import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { CategoryFormComponent } from './admin/category/category-form/category-form.component';
import { StatusListComponent } from './admin/status/status-list/status-list.component';
import { StatusFormComponent } from './admin/status/status-form/status-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'admin/category', component: CategoryListComponent },
  { path: 'admin/category/form', component: CategoryFormComponent },
  { path: 'admin/status', component: StatusListComponent },
  { path: 'admin/status/form', component: StatusFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
