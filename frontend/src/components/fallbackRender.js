"use client"
import React from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";

export function fallbackRender() {

  const error = useSelector(state =>state.errors)
  

  return (
    <div role="alert">
      <p>{error}</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  )
}