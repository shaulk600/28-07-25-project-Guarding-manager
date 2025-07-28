import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { AssignmentModule } from './assignment/assignment.module';
import { AuthModule } from './auth/auth.module';
import { ShiftsModule } from './shifts/shifts.module';



@Module({
  imports: [UsersModule, AssignmentModule, AuthModule, ShiftsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
