export default async function users(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
     const users = await response.json();
     return(
           <div>
               <h1>Users List</h1>
               {users?.map((user:{id:number,name:string})=>(
                    <div key={user.id}>
                         <h3>{user.name}</h3>
                    </div>
               ))}

           </div>

     );
}