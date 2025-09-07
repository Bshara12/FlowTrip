
import React from "react";
import { useParams } from "react-router-dom";
import OwnerDetailsComponent from "../Component/OwnerDetailsComponent";
import { TOKEN } from "../Api/Api";

export default function OwnerProfile() {
  const { id } = useParams();
  const token = TOKEN;

  console.log("OwnerDetails Rendered with id:", id);

  return <OwnerDetailsComponent id={id} token={token} isAdmin={false} isUser={true}/>;
}
