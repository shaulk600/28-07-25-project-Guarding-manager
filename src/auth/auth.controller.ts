import { Controller, Get, Param } from '@nestjs/common';

@Controller('/auth')
// @UseGuards(RolesGuard)
export class AuthController {

    @Get('/:user_name')
    searchUser(@Param('user_name') user_name: string) {

    }




}
