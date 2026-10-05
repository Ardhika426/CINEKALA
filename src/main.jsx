import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import { ReviewProvider } from "./context/ReviewContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WatchlistProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </WatchlistProvider>
  </BrowserRouter>,
);
