import { ICalender } from "@/interfaces";
import { useEffect, useState } from "react";
import * as config from "../config";
import axios from "axios";

export const PageCalender = () => {
  const [appointments, setAppointments] = useState<ICalender[]>([])

  useEffect(() => {
    (async () => {
      const response = await axios(`${config.backendUrl()}/calender`);
      const _appoinments = response.data;
      setAppointments(_appoinments)
    })();
  }, []);

  return (
    <>
      <h2>Calender</h2>
      <h2>there are {appointments.length} appointments</h2>
    </>
  );
};
