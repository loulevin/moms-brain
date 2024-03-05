import { ICalender } from "@/interfaces";
import axios from "axios";
import dayjs from "dayjs";
import * as config from "../config";
import { useState, useEffect } from "react";

export const CalenderCard = () => {
  const [appointments, setAppointments] = useState<ICalender[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios(`${config.backendUrl()}/api/calender`);
      const _appoinments = response.data.map((appointment: ICalender) => ({
        ...appointment,
        date: dayjs(appointment.date).format("DD-MM"),
      }));
      setAppointments(_appoinments);
    })();
  }, []);
  return (
    <>
      <div className="grid grid-cols-5">
        {appointments.map((appointment, index) => {
          const uniqueDayKey = `${appointment.date}-${appointment.dayOfWeek}`;
          const displayDate =
            index === 0 || appointments[index - 1].date !== appointment.date;

          return (
            <div
              key={uniqueDayKey}
              className={`gap-2 m-3 p-3 rounded-sm bg-gray-600 ${
                displayDate ? "col-span-5" : "col-span-1"
              }`}
            >
              {displayDate && (
                <>
                  <h3>{appointment.date.toString()}</h3>
                  <h4>{appointment.dayOfWeek}</h4>
                </>
              )}

              {appointment.appointments
                .sort((a, b) => dayjs(a.startTime).diff(dayjs(b.startTime)))
                .map((app) => (
                  <div key={app._id} className="flex gap-2">
                    <div className="flex-none">
                      <p>{app.startTime}</p>
                      <p className="text-center"> - </p>
                      <p>{app.endTime}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{app.title}</p>
                      <p>{app.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
