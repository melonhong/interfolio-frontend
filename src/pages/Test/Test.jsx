import React, { useState } from "react";
import { fetchLoginOnly } from "../../api/api";

function Test() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const result = await fetchLoginOnly();
      setData(result);
      setError(null);
    } catch (e) {
      setError("데이터 불러오기 실패");
      setData(null);
    }
  };

  return (
    <div>
      <button onClick={loadData}>데이터 불러오기</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <a href="http://localhost:8080/oauth2/authorization/google">
        Google로 로그인
      </a>
    </div>
  );
}

export default Test;
