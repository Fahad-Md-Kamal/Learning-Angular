import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor ( private http: HttpClient, private PostsService: PostsService) {}

  ngOnInit () {
    this.errorSub = this.PostsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });


      this.isFetching = true;
      this.PostsService.fetchPost().subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        }, error => {
          this.isFetching = false;
          this.error = error.message;
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.PostsService.createAndStrorePost(postData.title, postData.content);
  }

  onFetchPosts() {
      this.isFetching = true;
      this.PostsService.fetchPost().subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }


  onClearPosts() {
    this.PostsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

}
