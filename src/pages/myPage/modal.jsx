import React, { useState, useEffect } from "react";

const Modal = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <p>Nice to see you!</p>
        </div>
        <button> X </button>
        <div className="body">
          <p1>YOUR SUBSCRIPTION</p1>
          <p2>News, Cooking, and Wirecutter</p2>
          <button>Group Access</button>
          <p3>Log Out</p3>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Modal;
