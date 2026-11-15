
import React from "react";
// Import only design tokens initially; preserve the existing Bootstrap styling.
import "@neetechs/ui/tokens.css";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>

  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
   </BrowserRouter>
     </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorker.unregister();