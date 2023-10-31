"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarRouteProps {
  icon: LucideIcon;
  label: string;
  path: string;
}

const SidebarRoute = ({ icon: Icon, label, path }: SidebarRouteProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    (pathName === "/" && path === "/") ||
    pathName === path ||
    pathName.startsWith(path);

  const onClick = () => {
    router.push(path);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-800 hover:bg-slate-300/20" +
        (isActive &&
          " text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700")
      }
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={isActive ? "text-sky-700" : "text-slate-500"}
        ></Icon>
        {label}
      </div>
      <div
        className={
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all" +
          (isActive && " opacity-100")
        }
      />
    </button>
  );
};

export default SidebarRoute;
