import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <h1 className="mt-5 text-center mb-4">404 - Page Not Found</h1>
        <p className="text-center fs-5 mb-5">
          sorry, the page you are looking for does not exist. Please check the
          URL and try again.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
