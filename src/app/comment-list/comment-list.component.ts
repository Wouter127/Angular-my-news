import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments: string[] = ['comment 1', 'comment 2', 'comment 3'];
  showComments: boolean = true;
    
  constructor() { }

  ngOnInit(): void {
  }

}
