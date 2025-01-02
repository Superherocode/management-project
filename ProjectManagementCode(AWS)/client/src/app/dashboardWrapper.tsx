"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar/>
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        {/* navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  // Định nghĩa một component có tên DashboardWrapper.
  // Nó nhận một prop là `children`, có kiểu là `React.ReactNode`, đại diện cho bất kỳ nội dung React hợp lệ nào được đặt bên trong component.
  
  return (
    <StoreProvider>
      {/* Bọc các children bên trong `StoreProvider` để cung cấp ngữ cảnh (context) hoặc trạng thái chung cho toàn bộ ứng dụng. */}
      <DashboardLayout>{ children }</DashboardLayout>
      {/* Bọc `children` trong `DashboardLayout`, giúp áp dụng bố cục (layout) cụ thể cho phần dashboard. */}
    </StoreProvider>
  );
};


export default DashboardWrapper;
