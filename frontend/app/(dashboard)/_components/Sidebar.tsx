import { Button } from "../../../components/ui/button";
import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
        <Button variant={"destructive"} size={"sm"}>
          r me!
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
