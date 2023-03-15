import React, {useState, useContext} from "react";
import axios from "axios";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://194.87.237.199/api/v1";

const AuthContextProvider = ({children}) => {
      const [currentUser, setCurrentUser] = useState(false);
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);

      async function handleRegister(formData, navigate) {
        setLoading(true);
        try {
            const res = await axios.post(`${API}/account/register/`, formData);
            console.log(res);
            navigate("/register-success");
        } catch(error) {
            console.log(error);
            setError(Object.values(error.response.data).flat(2));
        } finally {
            setLoading(false);
        }
      }

      async function handleLogin(formData, username, navigate) {
        try{
            let res = await axios.post(`${API}/account/login`, formData);
            localStorage.setItem("tokens", JSON.stringify(res.data));
            localStorage.setItem("username", username);
            setCurrentUser(username);
            console.log(res);
            navigate("/");
        } catch(err){
            console.log(err);
            setError([err.response.data.detail]);
        }
      }
  return (
    <authContext.Provider value={{
        currentUser, 
        error,
        loading,

        setError,
        handleRegister, 
        handleLogin
    }}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider