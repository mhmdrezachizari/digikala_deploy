import { useRouter } from "next/router";
import React from "react";

const namevalue = () => {
  const Router = useRouter();
  
  return(
   <div className="p-5">
    <h1>ثبت نام شما با موفقیت انجام شد</h1>
   </div>
   )
};

export default namevalue;
