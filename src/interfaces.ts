export interface IAppointment {
    startTime: string;
    endTime: string;
    title: string;
    description: string;
}

export interface ICalender {
    date: Date;
    dayOfWeek: string;
    appointments: IAppointment[];
}