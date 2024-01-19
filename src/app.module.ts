import { Module } from '@nestjs/common';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { DatabaseService } from './database/database.service'; 

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, DatabaseService],
})
export class AppModule  {}
