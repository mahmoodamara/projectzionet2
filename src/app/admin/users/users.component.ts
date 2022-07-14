import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[]

  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userservice.getUsers().subscribe(res=>{
      this.users=res;
    })
  }

}
