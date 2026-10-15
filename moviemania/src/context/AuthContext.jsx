import React, {  createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState(() => {
    const email = localStorage.getItem("currentUserEmail");
    const name = localStorage.getItem("currentUserName");
    return email ? { name, email } : null;
  });
    
    function SignUp(name,email,password){
        const users = JSON.parse((localStorage.getItem("users"))||"[]")
        if(users.find(x => x.email == email)){
            return {success:false,error:"email already exits"};
        }
        const newUser = {name,email,password};
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUserEmail",email);
        localStorage.setItem("currentUserName",name);
        setUser({name,email});
        return {success:true,msg:`Welcome ${name}`};
    };
    function Login(email,password){
       const users = JSON.parse((localStorage.getItem("users"))||"[]");

       const user = users.find(x => x.email == email && x.password == password);
       if(!user){
        return {success:false,error:"User not found"};
       }
       localStorage.setItem("currentUserEmail",email);
       localStorage.setItem("currentUserName",user.name);
       setUser({name:user.name,email});
       return {success:true,msg:`welcome back ${user.name}`}
    };
    function LogOut(){
          localStorage.removeItem("currentUserEmail");
          localStorage.removeItem("currentUserName");
          setUser(null);
          return {success:true,msg:"logged out successfully"};
    };

  return (
   <AuthContext.Provider value={{user,SignUp,Login,LogOut}}>
     {children}
   </AuthContext.Provider>
  );
}
