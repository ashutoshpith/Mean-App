import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts = [
    // {
    //   title: 'First', content: 'first c'
    // },
    // {
    //   title: 'Second', content: 'Second c'
    // },
    // {
    //   title: 'Third', content: 'third c'
    // }
  ];

  constructor(public postService: PostsService) { }

  ngOnInit() {
  }


}
