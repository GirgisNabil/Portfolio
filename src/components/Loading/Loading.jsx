import React, { useEffect, useState, useRef } from "react";
import "./Loading.css";
export default function Loading() {
  return (
    <div id="Loader">
      <div class="body" id="Loader">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="base">
          <span></span>
          <div class="face"></div>
        </div>
      </div>
      <div class="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="Loading-Header">Redirecting</h1>
    </div>
  );
}
