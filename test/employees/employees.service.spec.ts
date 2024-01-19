import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';
import { DatabaseService } from '../database/database.service';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesService, DatabaseService],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const result = [{ /* your employee data */ }];
      jest.spyOn(databaseService, 'getConnection').mockReturnValueOnce({
        query: jest.fn().mockResolvedValueOnce([result]),
      });

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new employee', async () => {
      const employeeData = { /* your employee data */ };
      const result = { insertId: 1 };
      jest.spyOn(databaseService, 'getConnection').mockReturnValueOnce({
        query: jest.fn().mockResolvedValueOnce([result]),
      });

      expect(await service.create(employeeData)).toEqual({ id: 1, ...employeeData });
    });
  });

  describe('update', () => {
    it('should update an existing employee', async () => {
      const employeeId = '1';
      const employeeData = { /* updated employee data */ };
      jest.spyOn(databaseService, 'getConnection').mockReturnValueOnce({
        query: jest.fn().mockResolvedValueOnce(null),
      });

      expect(await service.update(employeeId, employeeData)).toEqual({ id: '1', ...employeeData });
    });
  });

  describe('remove', () => {
    it('should remove an existing employee', async () => {
      const employeeId = '1';
      jest.spyOn(databaseService, 'getConnection').mockReturnValueOnce({
        query: jest.fn().mockResolvedValueOnce(null),
      });

      await expect(service.remove(employeeId)).resolves.toBeNull();
    });
  });
});
    