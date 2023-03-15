import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { AiFillGithub } from "react-icons/ai";
import "../../../styles/Reg_Log.css";

const Login = () => {
  const { handleLogin, error, setError } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    handleLogin(formData, username, navigate);
  };

  useEffect(()=> {
    setError(false);
  }, []);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <div className="wrapper">
      <div className="wrapper__form">
        <FormControl className="wrapper__container">
          <h2>
            Sing In to <b style={{ color: "#bb2649" }}>LiveFusion</b>
          </h2>
          <Stack spacing={2} direction="column">
            <div className="wrapper_content">
              <Stack spacing={2} direction="column">
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input_box"
                  color="error"
                />
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={password}
                  color="error"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="" style={{ color: "#000", fontSize: "12px" }}>
                  Forget Password?
                </a>
                <Button onClick={handleAuth}>Sign In</Button>
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
                  Don't Have An Account?{" "}
                  <a onClick={() => navigate("/register")}>Sing Up!</a>
                </p>
              </Stack>
            </div>
          </Stack>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContextProvider";

// import FormControl from "@mui/material/FormControl";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import { AiFillGithub } from "react-icons/ai";
// import "../../../styles/Reg_Log.css";

// const Login = () => {
//   const { handleLogin, error, setError } = useAuth();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleAuth() {
//     let formData = new FormData();
//     formData.append("username", username);
//     formData.append("password", password);
//     handleLogin(formData, username, navigate);
//   }

//   useEffect(() => {
//     setError(false);
//   }, []);

//   return error ? (
//     <h2>{error}</h2>
//   ) : (
//     <div className="wrapper">
//       <div className="wrapper__form">
//         <FormControl className="wrapper__container">
//           <h2>
//             Sign In to <b style={{ color: "#bb2649" }}>LiveFusion</b>
//           </h2>
//           <Stack spacing={2} direction="column">
//             <div className="wrapper_content">
//               <Stack spacing={2} direction="column">
//                 <TextField
//                   label="Username"
//                   variant="outlined"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="input_box"
//                   color="error"
//                 />
//                 <TextField
//                   type="password"
//                   id="outlined-basic"
//                   label="Password"
//                   variant="outlined"
//                   value={password}
//                   color="error"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <a href="" style={{ color: "#000", fontSize: "12px" }}>
//                   Forget Password?
//                 </a>
//                 <Button onClick={handleAuth}>Sign In</Button>
//                 <p>or</p>
//                 <IconButton
//                   style={{
//                     color: "#fff",
//                     backgroundColor: "#000",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <AiFillGithub />
//                 </IconButton>
//                 <p>
//                   Don't Have An Account?
//                   <a onClick={() => navigate("/register")}>Sign Up!</a>
//                 </p>
//               </Stack>
//             </div>
//           </Stack>
//         </FormControl>
//       </div>
//     </div>
//   );
// };

// export default Login;

