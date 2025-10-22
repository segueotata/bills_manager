import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users') // O nome da tabela no banco de dados é 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, name: 'first_name' })
  firstName: string;

  @Column({ length: 50 })
  surname: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ name: 'password_hash', length: 255 })
  passwordHash: string; // Nome da coluna como no DDL

  // Colunas de Metadados (Auditáveis)

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;
  
  // TypeORM lida com a atualização automática do timestamp, 
  // eliminando a necessidade de um trigger manual no banco de dados.
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt: Date;
}