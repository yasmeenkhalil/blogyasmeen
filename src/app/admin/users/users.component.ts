import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users;
  constructor(public usersService: UsersService) {
    this.usersService.getUsers().subscribe((data:any) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
  deleteuser(id){
    this.usersService.deleteuser(id).subscribe(()=>{
      this.users =  this.users.filter(t=>t.id != id)
      this.usersService.getUsers().subscribe((data:any) => {
        this.users = data;
      });
     })
    }
}
