import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    public user_1 = new User(1, 'sse', 'asdfghjm@gmail.com', 'asdf', 'user');
    public user_2 = new User(2, 'hrtrt', 'asdfghjm@gmail.com', '6789', 'user');
    public user_3 = new User(3, 'df', 'asdfghjm@gmail.com', 'nnn', 'user');
    public user_4 = new User(4, 'sh', 'asdfghjm@gmail.com', '1234', 'admin');

    public users: User[] = [this.user_1, this.user_2, this.user_3, this.user_4];

    getAllUsers() {
        return this.users;
    }

    getUser(name) {
        const user_c = this.users.find(User => { User.user_name === name });
        if (user_c) {
            return user_c.role;
        }
    }

}
class User {
    public user_id: number;
    public user_name: string;
    public email: string;
    public pass: string;
    public role: string;

    public constructor(user_id: number, user_name: string, email: string, pass: string, role: string) {
        user_id = user_id;
        user_name = user_name;
        email = email;
        pass = pass;
        role = role;
    }
}


