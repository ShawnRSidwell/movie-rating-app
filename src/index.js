import React from "react";
import ReactDOM from "react-dom/client";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["horrible", "bad", "ok", "entertaining", "amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={3} />
  </React.StrictMode>
);
