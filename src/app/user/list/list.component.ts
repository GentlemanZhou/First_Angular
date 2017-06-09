import { Component, OnInit } from '@angular/core';
import { User } from '../model/user-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor( public userService: UserService) {
  }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  public pageChanged(event: any): void {
  }

  public updatePost(event):void{
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    this.userService.delete(value);
    this.getUsers();
  }
  public delPost(event):void{
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    this.userService.delete(value);
    this.getUsers();
  }
}
