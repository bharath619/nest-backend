export class PostAppointmentDto{
    id?:number
    name:string
    date:string
}

export class DeleteDto{
    appointment_id:number
}
export type Appointment = Partial<PostAppointmentDto>; 
