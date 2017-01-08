import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../services/user.service'

@Component({
    selector: 'my-user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['../app.component.css'],
    providers: [UserService]
})

export class UserDetailComponent {
    user: User;
    router: Router;


    constructor(route: ActivatedRoute, router: Router, userService: UserService) {
        let userId: number = parseInt(route.snapshot.params['userId']);
        this.user = userService.getUserById(userId);
        this.router = router;
    }

    back() {
        let link = ['/users'];
        this.router.navigate(link);
    }
}
