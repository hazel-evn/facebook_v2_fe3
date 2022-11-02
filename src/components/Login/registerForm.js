import { Formik, Form } from "formik";
import React, { useState } from "react";
import RegisterInput from "../Input/RegisterInput";
import * as Yup from "yup";
import DateBirthSelect from "./dateBirthSelect";
import GenderSelect from "./genderSelect";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const userInfos = {
  first_name: "",
  last_name: "",
  password: "",
  email: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth(),
  bDay: new Date().getDate(),
  gender: "",
};

const RegisterForm = ({ setVisible }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const yearTemp = new Date().getFullYear();
  const year = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  const registerValidation = Yup.object({
    first_name: Yup.string()
      .required("Xin hãy nhập tên của bạn.")
      .min(2, "Tên phải có từ 2 đến 16 ký tự.")
      .max(16, "Tên phải có từ 2 đến 16 ký tự.")
      .matches(/^[aA-zZ]+$/, "Số và ký tự đặc biệt không được phép."),
    last_name: Yup.string()
      .required("Xin hãy nhập tên của bạn.")
      .min(2, "Tên phải có từ 2 đến 16 ký tự.")
      .max(16, "Tên phải có từ 2 đến 16 ký tự.")
      .matches(/^[aA-zZ]+$/, "Số và ký tự đặc biệt không được phép."),
    email: Yup.string()
      .required(
        "Bạn sẽ cần cái này khi đăng nhập và nếu bạn cần đặt lại mật khẩu của mình."
      )
      .email("Nhập địa chỉ email hợp lệ."),
    password: Yup.string()
      .required(
        "Nhập kết hợp của ít nhất sáu số, chữ cái và dấu chấm câu (chẳng hạn như! Và &)"
      )
      .min(6, "Mật khẩu phải ít nhất 6 kí tự")
      .max(36, "Mật khẩu không được nhiều hơn 36 ký tự"),
  });
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const registerSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/register", {
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
      });
      setError("");
      console.log(data);
      setLoading(true);
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: data });
        Cookies.set("user", JSON.stringify(data));
        setLoading(false);
        setSuccess("Đăng ký tài khoản thành công !");
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.reponse.data.message);
    }
  };

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={() => setVisible(false)}></i>
          <span>Đăng ký</span>
          <span>Thật nhanh chóng và dễ dàng</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            password,
            email,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1);
            if (current_date - picked_date < atleast14) {
              setDateError(
                "Có vẻ như bạn đã nhập sai thông tin. Hãy đảm bảo rằng bạn sử dụng ngày sinh thực của mình."
              );
            } else if (genderError === "") {
              setDateError("");
              setGenderError(
                "Vui lòng chọn một giới tính. Bạn có thể thay đổi người có thể xem thông tin này sau."
              );
            } else {
              setDateError("");
              setGenderError("");
              registerSubmit();
            }
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Họ"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Tên"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Số điện thoại di động hoặc địa chỉ email"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Ngày sinh <i className="info_icon"></i>
                </div>
                <DateBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={year}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Giới tính <i className="info_icon"></i>
                </div>
                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className="reg_infos">
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                <span> Điều khoản, Chính sách Dữ liệu &nbsp;</span>
                và <span>Chính sách Cookie của chúng tôi.</span> Bạn có thể nhận
                được thông báo SMS từ chúng tôi và có thể chọn không tham gia
                bất kỳ lúc nào.
              </div>
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup">Đăng ký</button>
              </div>
              <ClipLoader color="#1876f2" loading={loading} size={30} />
              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
