import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import LoginInput from "../../components/Input/LoginInput";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import ClipLoader from "react-spinners/ClipLoader";

const loginInfos = {
  email: "",
  password: "",
};

const LoginForm = ({ setVisible }) => {
  const navigate = useNavigate();
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loginForm = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(data);
      setError("");
      setLoading(true);
      setSuccess("Đăng nhập thành công !");
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: data });
        setLoading(false);
        navigate("/");
        Cookies.set("user", JSON.stringify(data));
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.reponse.data.message);
    }
  };
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
            onSubmit={() => {
              loginForm();
            }}
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
          {error && <div className="error_text">{error}</div>}
          {success && <div className="success_text">{success}</div>}
          <ClipLoader color="#1876f2" loading={loading} size={30} />
          <div className="sign_splitter"></div>
          <button
            className="blue_btn open_signup"
            onClick={() => setVisible(true)}
          >
            Tạo tài khoản
          </button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Tạo một trang </b>
          cho một người nổi tiếng, thương hiệu hoặc doanh nghiệp.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
