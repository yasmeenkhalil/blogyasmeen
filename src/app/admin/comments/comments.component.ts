import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '@angular/compiler';
import { CommentsService } from 'src/app/services/comments.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments;
commentForm = new FormGroup({
  comment: new FormControl('', Validators.required),
});
  constructor(private commentservice:CommentsService) {
this.commentservice.getcomments().subscribe((data:any)=>{
  this.comments=data;
  console.log(data);

})

  }
  ngOnInit(): void {
  }
  deletecomment(id){
    this.commentservice.deletcomment(id).subscribe(()=>{
      this.comments =  this.comments.filter(t=>t.id != id)
      this.commentservice.getcomments().subscribe((data:any) => {
        this.comments = data;
      });
     })


  }

}
