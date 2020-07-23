import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  categories
  postForm = new FormGroup({
    id:new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
   category: new FormControl('', Validators.required),
  });
  constructor(private activatedRoute : ActivatedRoute ,
    private postsService : PostsService , private router : Router,private categoryservice:CategoriesService ) {
    let id = this.activatedRoute.snapshot.params.id;
    this.postsService.getPost(id).subscribe((data : any)=>{
         this.postForm.controls.title.setValue(data.title);
        this.postForm.controls.body.setValue(data.body);
        this.postForm.controls.category.setValue(data.category);})
        this.categoryservice.getCategories().subscribe((data:any)=>{
        this.categories=data;

    });
   }

  ngOnInit(): void {
  }

  save(){
    let id = this.activatedRoute.snapshot.params.id;


    this.postsService.editPost(this.postForm.value,id).subscribe((data)=>{
      console.log(data,id);


    });
    this.router.navigateByUrl('/admin/posts');
  }

}
