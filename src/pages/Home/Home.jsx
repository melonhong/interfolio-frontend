import { useEffect, useState } from "react";

function Home() {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  if (token) {
    localStorage.setItem("token", token);
    return <div>토큰: {token}</div>;
  } else {
    return <div>토큰이 없음</div>;
  }
}

export default Home;
