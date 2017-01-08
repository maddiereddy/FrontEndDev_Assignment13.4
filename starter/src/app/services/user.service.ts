import {Injectable} from '@angular/core';

export class User {
    constructor(
        public id: number,
        public name: string,
        public companyName: string,
        public designation: string,
        public gender: string,
        public age: number) {
    }
}

@Injectable()
export class UserService {
    getUsers(): User[] {
        return users.map(u => new User(u.id, u.name, u.companyName, u.designation, u.gender, u.age));
    }

    getUserById(userId: number): User {
        return users.find(u => u.id === userId);
    }
}

let users = [
    {id: 101, name: 'Avnesh Shakya', companyName: 'Acalgild', designation: 'Software Engineer', gender: 'male', age: 26},
    {id: 102, name: 'Adam Schultz', companyName: 'Facebook', designation: 'VP-Sales', gender: 'male', age: 30},
    {id: 103, name: 'Maddie Reddy', companyName: 'Snapchat', designation: 'Senior Developer', gender: 'female', age: 41},
    {id: 104, name: 'Vasu Rao', companyName: 'Airbnb', designation: 'SVP-Marketing', gender: 'male', age: 21},
    {id: 105, name: 'Amit Dey', companyName: 'Uber', designation: 'Sales Rep', gender: 'male', age: 55},
    {id: 106, name: 'Joe Adams', companyName: 'Twitter', designation: 'Staff Engineer', gender: 'male', age: 20},
    {id: 107, name: 'Kay Williams', companyName: 'LinkedIn', designation: 'Design Engineer', gender: 'female', age: 24},
    {id: 108, name: 'David McIntyre', companyName: 'Instagram', designation: 'CEO', gender: 'male', age: 33}
];

