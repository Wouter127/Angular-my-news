import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleService } from './article.service';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShortenContentPipe } from './shorten-content.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleCommentComponent,
    CommentListComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    LatestNewsComponent,
    ArticleDetailComponent,
    ShortenContentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
