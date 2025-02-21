import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentService } from './appointment/appointment.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '<host>',
      port: 5432,
      username: '<user>',
      password: '<password>',
      database: '<db>',
      entities: [],
      synchronize: true, 
    }),
    
  ],
  controllers: [AppController],
  providers: [AppointmentService],
})
export class AppModule {}
