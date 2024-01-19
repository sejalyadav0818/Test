import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection;

  constructor() {
    this.connect();
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: 'sql12.freesqldatabase.com',
      user: 'sql12678041',
      password: '3F1yCIti92',
      database: 'sql12678041',
    });
  }
  
  getConnection() {
    return this.connection;
  }
}
