import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import LoginInput from "../../components/Input/LoginInput";
import * as Yup from "yup";

const loginInfos = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValition = Yup.object({
    email: Yup.string()
      .required("Địa chỉ email là bắt buộc.")
      .email("Phải là một email hợp lệ.")
      .max(100),
    password: Yup.string().required("Mật khẩu là bắt buộc."),
  });
  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="" />
        <span>
          Facebook giúp bạn kết nối và chia sẻ với những người trong cuộc sống
          của bạn.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValition}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Địa chỉ email hoặc số điện thoại"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="blue_btn">
                  Đăng nhập
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Đã quên mật khẩu ?
          </Link>
          <div className="sign_splitter"></div>
          <button className="blue_btn open_signup">Tạo tài khoản</button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Tạo một trang</b>
          cho một người nổi tiếng, thương hiệu hoặc doanh nghiệp.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
