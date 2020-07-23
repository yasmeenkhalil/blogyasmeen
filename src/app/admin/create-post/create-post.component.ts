import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { TagsService } from 'src/app/services/tags.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  categories;
  tags;
postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),


  });

  constructor(   private postsService : PostsService , private router : Router, private categoryservice :CategoriesService,private tagservice:TagsService) {

this.categoryservice.getCategories().subscribe(data=>{
  this.categories=data;
})
this.tagservice.getTags().subscribe(data=>{this.tags=data})


  }

  ngOnInit(): void {}

  save(){
    this.postsService.createPost(this.postForm.value).subscribe((data)=>{

      this.router.navigate(['/admin/posts']);
    })
  }
}
