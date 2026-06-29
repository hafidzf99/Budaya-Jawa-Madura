import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8ED] via-[#F8F2E7] to-[#EFE3C5]">
      <Outlet />
    </div>
  );
}