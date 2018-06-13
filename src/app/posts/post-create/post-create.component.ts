import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterContent = '';
  enterTitle = '';
  @Output() postCreated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.enterTitle,
      content: this.enterContent
    };
    this.postCreated.emit(post);
  }

}
