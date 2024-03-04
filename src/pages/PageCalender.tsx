import { ICalender } from "@/interfaces";
import { useEffect, useState } from "react";
import * as config from "../config";
import axios from "axios";
import dayjs from "dayjs";

export const PageCalender = () => {
  const [appointments, setAppointments] = useState<ICalender[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios(`${config.backendUrl()}/api/calender`);
      const _appoinments = response.data.map((appointment) => ({
        ...appointment,
        date: dayjs(appointment.date).format("DD-MM"),
      }));
      setAppointments(_appoinments);
    })();
  }, []);

  return (
    <>
      <h2>Calender</h2>
      <h2>there are {appointments.length} MongoDB appointments</h2>
      <div className="grid grid-cols-3">
        {appointments.map((appointment, index) => {
          const uniqueDayKey = `${appointment.date}-${appointment.dayOfWeek}`;
          const displayDate =
            index === 0 || appointments[index - 1].date !== appointment.date;

          return (
            <div
              key={uniqueDayKey}
              className={`gap-2 m-3 p-3 rounded-sm bg-gray-600 ${displayDate ? "col-span-3" : "col-span-1"}`}
            >
              {displayDate && (
                <>
                  <h3>{appointment.date}</h3>
                  <h4>{appointment.dayOfWeek}</h4>
                </>
              )}

              {appointment.appointments
                .sort((a, b) => dayjs(a.startTime).diff(dayjs(b.startTime)))
                .map((app) => (
                  <div key={app._id}>
                    <p>
                      {app.startTime} - {app.endTime}
                    </p>
                    <p>{app.title}</p>
                    <p>{app.description}</p>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
