"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html>
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
