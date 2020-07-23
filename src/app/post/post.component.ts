import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { CommentsService } from '../services/comments.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post;
  comments;
  commentForm = new FormGroup({
    comment: new FormControl('', Validators.required),


  });
  constructor(private activatedRoute : ActivatedRoute ,private postsService : PostsService ,private commentservice:CommentsService) {
    let id = this.activatedRoute.snapshot.params.id;
    this.postsService.getPost(id).subscribe(data=>{
      this.post = data;
    })


   }

  ngOnInit(): void {
  }




  }


