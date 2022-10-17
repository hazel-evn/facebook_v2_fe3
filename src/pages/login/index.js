import React, { useState } from "react";
import "./style.css";
import "../../styles/icons/icons.css";
import LoginForm from "../../components/Login/loginForm";
import Footer from "../../components/Login/footer";
import RegisterForm from "../../components/Login/registerForm";

function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="login">
        <div className="login_wrapper">
          <LoginForm setVisible={setVisible} />
          {visible && <RegisterForm setVisible={setVisible} />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
