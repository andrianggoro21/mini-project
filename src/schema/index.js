import * as Yup from "yup";

const AttendanceSchema = Yup.object().shape({
    fullName: Yup.string().required("Fullname is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    phoneNumber: Yup.number().required("Password is required"),
   
  });

export default AttendanceSchema;