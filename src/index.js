import React from "react";
import ReactDOM from "react-dom";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const NAVER_API_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RenderAfterNavermapsLoaded ncpClientId={NAVER_API_KEY}>
        <App />
      </RenderAfterNavermapsLoaded>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
