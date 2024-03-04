export interface IAppointment {
    _id: string;
    startTime: string;
    endTime: string;
    title: string;
    description: string;
}

export interface ICalender {
    _id: string;
    date: Date;
    dayOfWeek: string;
    appointments: IAppointment[];
}