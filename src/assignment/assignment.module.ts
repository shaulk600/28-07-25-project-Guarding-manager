import { Module } from '@nestjs/common';
import { AssignmentService } from "./assignment.service";
import { AssignmentController } from './assignment.controller';

@Module({
    imports: [],
    controllers: [AssignmentController],
    providers: [AssignmentService],
    exports: [Ass]

})

export class AssignmentModule { }
