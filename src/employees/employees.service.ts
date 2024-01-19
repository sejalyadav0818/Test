import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<any[]> {
    const connection = this.databaseService.getConnection();
    const [rows] = await connection.query('SELECT * FROM employees');
    return rows;
  }

  async create(employee): Promise<any> {
    const connection = this.databaseService.getConnection();
    const [result] = await connection.query('INSERT INTO employees SET ?', employee);
    return { id: result.insertId, ...employee };
  }

  async update(id, employee): Promise<any> {
    const connection = this.databaseService.getConnection();
    await connection.query('UPDATE employees SET ? WHERE id = ?', [employee, id]);
    return { id, ...employee };
  }

  async remove(id): Promise<void> {
    const connection = this.databaseService.getConnection();
    await connection.query('DELETE FROM employees WHERE id = ?', id);
  }
}
