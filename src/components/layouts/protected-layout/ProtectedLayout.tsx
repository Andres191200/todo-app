import React, { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase-client/supabaseClient";

export default function ProtectedLayout() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/auth");
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="layoutScreen">
      {loading ? (
        <h1>Loading from protectedLayout...</h1>
      ) : (
        <>
          <Sidebar />
          <Outlet />
        </>
      )}
    </div>
  );
}
