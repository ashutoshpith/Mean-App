import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterContent = '';
  enterTitle = '';
  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.enterTitle,
      content: this.enterContent
    };
  }

}
