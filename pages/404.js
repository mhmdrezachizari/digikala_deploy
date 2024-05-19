import React from "react";
import { Hourglass } from "react-loader-spinner";

const error = () => {
  return (
    <div className="p-5">
      <h1 className="my-2">صفحه مورد نظر یافت نشد</h1>
      <div className="d-flex justify-content-center mt-3">
        <Hourglass
          visible={true}
          height="90"
          width="90"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    </div>
  );
};

export default error;
