import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private postsService: PostsService , private router:Router) {
    this.postsService.getPosts().subscribe((data:any) => {
      this.posts = data;
    });
  }

  ngOnInit(): void {}
  deletepost(id){
    this.postsService.deletepost(id).subscribe(()=>{
      this.posts =  this.posts.filter(t=>t.id != id)
      this.postsService.getPosts().subscribe((data:any) => {
        this.posts = data;
      });
     })


  }


}
