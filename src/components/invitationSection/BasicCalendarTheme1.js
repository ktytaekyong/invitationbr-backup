/* Import */
import { useState, useEffect, useContext } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
/* CSS Module */
import styles from "../../css/module/invitationSection/BasicCalendarTheme1.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const BasicCalendarTheme1 = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  useEffect(() => {
    
  }, [basicInfoList.dateInfo.date]);
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
export default BasicCalendarTheme1;