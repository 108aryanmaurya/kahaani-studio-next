"use client";
import React, { useEffect } from "react";
import AuthenticatedAdminPage from "../_admin/AdminPanel/AdminHome/AuthenticatedAdminPage";
import { usePathname } from "next/navigation";
import { tokenValidation } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function page() {
  const route = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("authtoken"));
    if (pathname.startsWith("/admin")) {
      if (storedAuthData) {
        validateAuthToken();
      } else {
        handleLogout(); // Handle invalid token
      }
    }
  }, []);
  const validateAuthToken = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      console.log(authtoken);
      if (!authtoken) {
        handleLogout();
        return;
      }

      const decodedToken = jwtDecode(authtoken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        handleLogout(); // Token expired, logout
        return;
      }

      const res = await tokenValidation(authtoken.replace(/"/g, ""));
      if (!res.success || !res.admin) {
        handleLogout();
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      handleLogout(); // Handle invalid token
    } finally {
      console.log("Token validation complete");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    route.push("/authenticate/admin"); // Redirect to login page or any desired route
  };
  return (
    <>
      <main>
        <AuthenticatedAdminPage />
      </main>
    </>
  );
}
