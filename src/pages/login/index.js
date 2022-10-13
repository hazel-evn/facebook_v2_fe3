import React from "react";
import "./style.css";
import LoginForm from "../../components/Login/loginForm";
import Footer from "../../components/Login/footer";

function Login() {
  return (
    <div>
      <div className="login">
        <div className="login_wrapper">
          <LoginForm />
          <div className="register"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
