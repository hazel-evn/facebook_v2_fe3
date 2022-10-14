import React from "react";
import "./style.css";
import "../../styles/icons/icons.css";
import LoginForm from "../../components/Login/loginForm";
import Footer from "../../components/Login/footer";
import RegisterForm from "../../components/Login/registerForm";

function Login() {
  return (
    <div>
      <div className="login">
        <div className="login_wrapper">
          <LoginForm />
          <RegisterForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
