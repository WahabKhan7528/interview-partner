import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-sm font-medium tracking-widest uppercase text-secondary animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default Protected;
