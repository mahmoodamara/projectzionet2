import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users:any=[];
  showmassege:boolean;
  user=new User();
  constructor(private usersericse:UserserviceService ) { }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList(){
    this.usersericse.getUsers().subscribe((res)=>{
      this.users=res;
    })
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.usersericse.deleteUser(_id).subscribe((res) => {
        this.refreshUsersList();
      });
    }
  }
}
/*
  addUser(){
    if(!this.user._id){
    this.usersericse.PostUser(this.user).subscribe((res) => {
      this.refreshUsersList();
      this.showmassege = true;

      setTimeout(()=>{
        this.showmassege = false;
    }, 3000);
    });
  }
  else{
    this.usersericse.putUser(this.user).subscribe((res) => {
      this.refreshUsersList();
      this.showmassege = true;

      setTimeout(()=>{
        this.showmassege = false;
    }, 3000);
  })
  }
}
onDelete(_id: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.usersericse.deleteUser(_id).subscribe((res) => {
      this.refreshUsersList();
    });
  }
}


editUser(user:User){
    this.user=user;
}
*/

