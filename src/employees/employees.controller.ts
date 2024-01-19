import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.employeesService.findAll();
  }

  @Post()
  async create(@Body() employee): Promise<any> {
    return this.employeesService.create(employee);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() employee): Promise<any> {
    return this.employeesService.update(id, employee);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.employeesService.remove(id);
  }
}
