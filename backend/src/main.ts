import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita o CORS (ainda essencial se o frontend for em outra porta)
  app.enableCors({
    origin: 'http://localhost:5173', // Porta do seu frontend React
  }); 

  await app.listen(3000); 
}
bootstrap();