import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null);

  const {SignUp} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const result = SignUp(name,email,password);
    if(result.success){
      alert(result.msg);
      navigate("/");
    }else{
      setError(result.error);
    }
  };
  
   
  return (
    <div className="flex flex-col items-center justify-center ml-30 mr-20  p-10 m-10 bg-gray-500 text-white ">
      {error && <p className="bg-red-500 p-2 mb-2 text-white">{error}</p>}
      <form className="flex flex-col p-5 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="border-white bg-white text-black p-2 rounded-sm"
            type="text"
            placeholder="Maruf hossain"
            required
            minLength={6}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
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
            placeholder=".........."
            required
            minLength={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="bg-blue-400 p-1.5 text-center mt-2">
          <button type="submit" className="cursor-pointer" >Create Account</button>
        </div>
        <p>Already have an account? <span onClick={()=>navigate("/login")} className="text-blue-300 underline cursor-pointer">Login</span></p>
      </form>
    </div>
  );
}

export default RegisterForm;
