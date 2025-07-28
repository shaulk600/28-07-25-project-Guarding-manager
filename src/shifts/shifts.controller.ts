import { Controller, Get, Param, Post } from '@nestjs/common';
import { ShiftsService } from "./shifts.service";

@Controller('shifts')
export class ShiftsController {
    constructor(private readonly ShiftsService: ShiftsService) { }

    @Get('/Tasks/:user_name')
    getShift(@Param('user_name') name :string) { // by ID or Name is auth
        return {} // or somethings
    }

    @Post('/Tasks/:user_name')
    initShift(@Param('user_name') name :string) {
        return {} // or somethings
    }

}
