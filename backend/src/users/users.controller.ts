import { Controller, Post, Body, ValidationPipe, UsePipes, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

// O controller do CRUD gerado normalmente usa um prefixo, ex: /users
@Controller('users') 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true }))
  
  async register(
    @Body() createUserDto: CreateUserDto
  ) {
    const user = await this.usersService.create(createUserDto);
    return { 
        id: user.id, 
        email: user.email, 
        firstName: user.firstName 
    };
  }

  @Get('/list')
  async findAll() {
    return this.usersService.findAll();
  }
}