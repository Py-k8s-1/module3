import React from "react";
import "./Login.css";
import Cookies from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };

    const access_token= Cookies.get("token")

    const isAuthenticated = !!access_token
 
    if (isAuthenticated){
      props.history.push('/dashboard')
    }
  }

  onChangeHandlerEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value });
  };

  onChangeHandlerPassword = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  SubmitHandler = async (e) => {
    e.preventDefault();

    //hit the api
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );

    const result = await res.json();

    if (result.status === 401) {
      this.setState({ ...this.state, error: "invalid password" });
    }


    if (result.status !== 401) {
      //save access token and redirect user
      Cookies.set("token", result.access_token);
      //localStorage.setItem("token",result.access_token)
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const inputStyle = {
      border: "1px solid #420707",
      width: "50%",
      padding: "10px",
      margin: "auto",
    };

    return (
      <div style={inputStyle}>
        <h1>Log In</h1>
        <p>{this.state.error}</p>
        <form onSubmit={this.SubmitHandler}>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input-element"
            onChange={this.onChangeHandlerEmail}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            className="input-element"
            onChange={this.onChangeHandlerPassword}
          />
          <input type="submit" value="Login" id="Login-Button" />
        </form>
      </div>
    );
  }
}

export default Login;
