import { Injectable } from '@nestjs/common';
import { Appointment } from 'src/dto/appointment.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppointmentService {
    constructor(private readonly entityManager: EntityManager) { }
    getAllAppointments = () => {
        return this.entityManager.query<Appointment[]>("SELECT id,name,TO_CHAR(date, 'YYYY-MM-DD') as date FROM appointment");
    }
    insertAppointment = (appointment:Appointment)=>{
         return this.entityManager.query("INSERT INTO appointment(name,date) VALUES($1,$2)",[appointment.name,appointment.date]);
    }
    deleteAppointment = (id:number)=>{
         return this.entityManager.query("DELETE FROM appointment WHERE id=$1",[id]);
    }
    updateAppointment = (appointment:Appointment)=>{
         return this.entityManager.query("UPDATE appointment SET name=$1,date=$2 WHERE id=$3",[appointment.name,appointment.date,appointment.id]);
    }
}
