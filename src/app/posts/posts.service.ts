import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postsUpadated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}
  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpadated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpadated.next([...this.posts]);
  }
  }

