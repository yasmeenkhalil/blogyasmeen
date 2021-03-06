import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts;
  tags;
  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;

    });

  }

  ngOnInit(): void {}
}
