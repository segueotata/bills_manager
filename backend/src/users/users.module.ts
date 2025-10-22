import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 Importe o TypeOrmModule
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity'; // 👈 Importe a Entidade

@Module({
  imports: [
    // 👈 ESTA LINHA É A CHAVE
    // Diz ao NestJS para injetar o repositório da entidade User no service
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}