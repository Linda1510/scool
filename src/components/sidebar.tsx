import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
};

const linkList=[
    {
        path:"/progress-bar",
        label:"Progress bar",
    },
    path:"/loader",
    label:"Loader",
]
const Sidebar = ({ isOpen }: SidebarProps) => {
  return <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
    <NavLink  onClick={onclose} className="sidebar__link" to="/progress-bar">

    </Navlink>
  </div>;
};
export default Sidebar;
