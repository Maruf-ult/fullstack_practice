import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null);

  const {Login} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const result = Login(email,password);
    if(result.success){
       navigate("/");
       alert(result.msg);
    }else{
      setError(result.error);
    }
    
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center m-10 bg-gray-500 ml-36 mr-30  text-white p-10">
      {error && <p className="bg-red-500 p-2 mb-2 text-white">{error}</p>}
      <form className="flex flex-col p-8 gap-4" onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <label>Email</label>
          <input
            className="border-white bg-white text-black p-2 rounded-sm"
            type="email"
            placeholder="maruf@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="border-white bg-white text-black p-2 rounded-sm"
            type="password"
            required
            minLength={5}
            placeholder=".........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col bg-blue-400 p-1 mt-2 ">
          <button type="submit" className="cursor-pointer">Login</button>
        </div>
          <p>Dont have an account? <span onClick={()=>navigate("/register")} className="text-blue-300 underline cursor-pointer">Sign up</span></p>
      </form>
    </div>
  );
}

export default LoginForm;
