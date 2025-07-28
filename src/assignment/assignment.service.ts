import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentService {

}

class Assignment {
    public assignment_id: number;
    public user_id: number;
    public shift_id: number;

    public constructor(assignment_id: number, user_id: number, shift_id: number) {
        assignment_id = assignment_id;
        user_id = user_id;
        shift_id = shift_id;
    }
}
