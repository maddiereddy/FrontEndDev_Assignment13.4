import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
    selector: 'my-user',
    templateUrl: './user.component.html',
    styleUrls: ['../app.component.css'],
    providers:    [UserService]
})
export class UserComponent {
    users: User[] = [];

    constructor(private userService: UserService) {
        this.users = userService.getUsers();
    }
}