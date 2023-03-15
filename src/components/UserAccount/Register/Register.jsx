import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";
import Loader from "../Loader/Loader";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { AiFillGithub } from "react-icons/ai";
import "../../../styles/Reg_Log.css";

const Register = () => {
  const { handleRegister, error, setError, loading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  useEffect(() => {
    setError(false);
  }, []);

  function handleSave() {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConf.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", passwordConf);
    handleRegister(formData, navigate);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <div className="wrapper__form">
        <FormControl className="wrapper__container">
          <h2>
            Join <b style={{ color: "#bb2649" }}>LiveFusion</b>
          </h2>
          {error ? <h3>{error}</h3> : ""}
          <Stack spacing={2} direction="column">
            <div className="wrapper_content">
              <Stack spacing={2} direction="column">
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  color="error"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input_box"
                  color="error"
                />

                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="error"
                />
                <TextField
                  type="password"
                  label="Password Confirmation"
                  variant="outlined"
                  value={passwordConf}
                  onChange={(e) => setPasswordConf(e.target.value)}
                  color="error"
                />
              </Stack>
            </div>

            <Button onClick={handleSave}>Sign Up</Button>
            <p>or</p>
            <IconButton
              style={{
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: "5px",
              }}
            >
              <AiFillGithub />
            </IconButton>
            <p>
              Already Have An Account?{" "}
              <a onClick={() => navigate("/login")}>Sing In!</a>
            </p>
          </Stack>
        </FormControl>
      </div>
    </div>
  );
};

export default Register;
