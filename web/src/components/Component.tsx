import api from "@/api";
import { useState } from "react";

export const Component = () => {
  const [request, setRequest] = useState("");

  api.ApiRequest.fetch().then((res) => {
    setRequest(res.data);
  });

  return (
    <div className="component">
      <h1>{request}</h1>
    </div>
  );
};
