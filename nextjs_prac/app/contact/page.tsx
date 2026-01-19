import Button from "./button";

export default async function Contact(){
     console.log("is this server or client component");
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const posts = await response.json();
     console.log(posts);
  return ( 
     <div>
     <h1 className="font-bold text-gray-700">Contact page</h1>
     <Button/>
     </div>
);
}