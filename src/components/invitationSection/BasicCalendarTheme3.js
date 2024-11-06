/* Import */
import { useState, useEffect, useContext } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
/* CSS Module */
import styles from "../../css/module/invitationSection/BasicCalendarTheme3.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const BasicCalendarTheme3 = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  useEffect(() => {
    const elements = document.querySelectorAll('.MuiDayCalendar-weekDayLabel');
    elements.forEach((element) => {
      const dayLabel = element.getAttribute('aria-label');
      switch (dayLabel) {
        case 'Sunday':
          element.textContent = 'Sun';
          break;
        case 'Monday':
          element.textContent = 'Mon';
          break;
        case 'Tuesday':
          element.textContent = 'Tue';
          break;
        case 'Wednesday':
          element.textContent = 'Wed';
          break;
        case 'Thursday':
          element.textContent = 'Thu';
          break;
        case 'Friday':
          element.textContent = 'Fri';
          break;
        case 'Saturday':
          element.textContent = 'Sat';
          break;
        default:
          break;
      }
    });
  }, []);
  return (
    <div className="calendar__wrap">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          value={dayjs(basicInfoList.dateInfo.date)}
          className={styles.calendar}
        />
      </LocalizationProvider>
    </div>
  );
}
export default BasicCalendarTheme3;