"use client";
import { Bell, Home, Search } from "lucide-react";
import SidebarRoute from "./SidebarRoute";

const guestRoute = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Bell, label: "Notify", path: "/notify" },
];

const SidebarRoutes = () => {
  const routes = guestRoute;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarRoute
          key={route.path}
          icon={route.icon}
          label={route.label}
          path={route.path}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
