import React from "react";

export default function UserPageLayout({children}:{children:React.ReactNode}){
     return(
          <div>
                   <h1 className="text-red-400 font-bold">This is user details page</h1>
                   {children}
          </div>
     );
}