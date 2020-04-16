import React, { Children } from "react";
import DateFnsUtils from "@date-io/date-fns";
import JalaliUtils from "@date-io/jalaali";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import jMoment from "moment-jalaali";
import moment from "moment";

jMoment.loadPersian({
  dialect: "persian-modern",
  usePersianDigits: false,
});

const DateProvider = (props) => {
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      {Children.only(props.children)}
    </MuiPickersUtilsProvider>
  );
};

export default DateProvider;
