import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftsService {

    getShift(user_name: string) {

    }

    setShift(data: string) {

    }
}
class Shift {
    public shift_id: number;
    public start_time: string;
    public end_time: string;
    public location: string;
    public constructor(shift_id: number, start_time: string, end_time: string, location: string) {
        shift_id = shift_id;
        start_time = start_time;
        end_time = end_time;
        location = location;
    }
}
