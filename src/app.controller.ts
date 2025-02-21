import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Appointment, DeleteDto, PostAppointmentDto } from './dto/appointment.dto';
import { AppointmentService } from './appointment/appointment.service';
import { bindNodeCallback } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  async getAllAppointment(): Promise<{ data: Appointment[] }> {
    try {
       const appointmentList = await this.appointmentService.getAllAppointments();
       return {data:appointmentList}
    } catch (error) {
       throw new HttpException({message:"Something went wrong"},HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('add-appointment')
  async addAppointment(@Body() body:PostAppointmentDto): Promise<{ message: string; }> {
    try {
      await this.appointmentService.insertAppointment(body);
      return {message:"Appointment Added!!"}
   } catch (error) {
      console.log(error)
      throw new HttpException({message:"Something went wrong"},HttpStatus.INTERNAL_SERVER_ERROR)
   }
  }
  @Delete('delete-appointment')
  async removeAppointment(@Body() body:DeleteDto){
    try {
      await this.appointmentService.deleteAppointment(body.appointment_id);
      return {message:"Appointment Deleted!!"}
   } catch (error) {
      console.log(error)
      throw new HttpException({message:"Something went wrong"},HttpStatus.INTERNAL_SERVER_ERROR)
   }
  }
  @Post('update-appointment')
  async updateAppointment(@Body() body:PostAppointmentDto){
    try {
      await this.appointmentService.updateAppointment(body);
      return {message:"Appointment Updated!!"}
   } catch (error) {
      console.log(error)
      throw new HttpException({message:"Something went wrong"},HttpStatus.INTERNAL_SERVER_ERROR)
   }
  }
}
