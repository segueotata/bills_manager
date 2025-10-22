import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',         // Mude para o seu host (ex: IP ou nome do container Docker)
      port: 5432,                // Porta padrão do Postgres
      username: 'admin',      // Seu usuário do Postgres
      password: 'admin',    // Sua senha do Postgres
      database: 'bills_manager_db',    // O nome do seu banco de dados
      
      // Carrega as entidades automaticamente a partir do momento que forem criadas
      autoLoadEntities: true, 
      
      // Sincroniza o esquema do banco de dados com suas entidades (use SOMENTE em DEV!)
      synchronize: true,         
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}