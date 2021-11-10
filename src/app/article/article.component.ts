import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Article } from './article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = { id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "", categoryId: 0, statusId: 0 };
  @Input() isDetail: boolean = false;
  @Input() route: string = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isPublishedWithinThisWeek(): boolean {
    let today = new Date();
    let publishDate = new Date(this.article.publishDate);
    let prevWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    if (publishDate <= today && publishDate >= prevWeek) {
      return true;
    } else {
      return false;
    }
  }

  detail(id: number) {
    this.router.navigate(['/article', id]);
  }

  backRoute(){
    this.router.navigate([this.route]);
  }

}
