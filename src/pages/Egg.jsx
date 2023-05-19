import React from "react";
import { useNavigate } from "react-router-dom";

const Egg = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        class="btn  btn-success w-50 d-flex align-content-center justify-content-center mt-5 "
        onClick={(e) => navigate("/chicken")}
      >
        🥚
      </button>
    </div>
  );
};

export default Egg;
