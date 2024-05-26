import { useRouter } from "next/router";
import React from "react";

const DashboardWelcome = () => {
    const Router =useRouter()
    console.log(Router)
    
  return <div>
    <h1>خوش آمدی {Router.query.DashboardWelcome}</h1>
  </div>;
};

export default DashboardWelcome;
