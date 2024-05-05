import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";

function isoToDate(isoString) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Kolkata");

  return dayjs.tz(isoString).format("D MMM YYYY");
}

export default isoToDate;
