import React, {useState} from 'react';
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import "../../../styles/Reg_Log.css"

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 300px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  color: #171718;
  background: ${theme.palette.mode === "light" ? "aria-label" : "#fff"};

  &:hover {
    border-color: #fff;
  };
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  return (
    <div className="wrapper__form">
      <FormControl className="wrapper_container">
        <h2>Join Livefusion</h2>
        {/* {error ? <h3>{error}</h3> : ""} */}
        <Stack spacing={2} direction="column">
          <div className="wrapper_content">
            <FormLabel>*Email</FormLabel>
            <CustomInput
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input_box"
            />
            <FormLabel>*Password</FormLabel>
            <CustomInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input_box"
            />
          </div>
          <Button
            // onClick={() => register(username, password)}
            className="btn_reg"
          >
            Create My Account
            {/* <ArrowForwardIcon onClick={() => navigate("/login")} /> */}
          </Button>
        </Stack>
      </FormControl>
    </div>
  );
}

export default Register;