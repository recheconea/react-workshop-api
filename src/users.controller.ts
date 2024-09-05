import { Controller, Get, Param } from '@nestjs/common';
import { User } from './domain/user';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { allUsers } from './all-users';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): User[] {
    return allUsers;
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | null {
    const user = allUsers.find((user) => user.id === parseInt(id, 10));
    if (!user) {
      return null;
    }
    return user;
  }
}
