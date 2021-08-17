import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users: IUser[] =[
   {
     name: 'nguyen dac chien',
     email: 'dacchien@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
   {
     name: 'nguyen van a',
     email: 'a@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
   {
     name: 'nguyen van b',
     email: 'b@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
   {
     name: 'nguyen van c',
     email: 'c@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
   {
     name: 'nguyen van d',
     email: 'd@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
   {
     name: 'nguyen van e',
     email: 'e@gmail.com',
     phone: '0969686922',
     address: 'ha noi',
     image: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
   },
 ]
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index:number){
   if (confirm('Ban chac chan muon xoa')){
     this.users.splice(index,1)
   }
}
}
