/* Import */
import { useState, useEffect, useContext } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
/* CSS Module */
import styles from "../../css/module/invitationSection/BasicCalendarTheme2.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const BasicCalendarTheme2 = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  useEffect(() => {
    const elements = document.querySelectorAll('.MuiDayCalendar-weekDayLabel');
    elements.forEach((element) => {
      const dayLabel = element.getAttribute('aria-label');
      switch (dayLabel) {
        case 'Sunday':
          element.textContent = '일';
          break;
        case 'Monday':
          element.textContent = '월';
          break;
        case 'Tuesday':
          element.textContent = '화';
          break;
        case 'Wednesday':
          element.textContent = '수';
          break;
        case 'Thursday':
          element.textContent = '목';
          break;
        case 'Friday':
          element.textContent = '금';
          break;
        case 'Saturday':
          element.textContent = '토';
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
export default BasicCalendarTheme2;