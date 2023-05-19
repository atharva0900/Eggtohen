import React from "react";
import { useNavigate } from "react-router-dom";
const Chicken = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={(e) => navigate("/egg")}
        class="btn btn-warning w-50 d-flex align-content-center justify-content-center mt-5 "
      >
        🐔
      </button>
    </div>
  );
};

export default Chicken;
