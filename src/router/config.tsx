import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import VolunteerSoftwareEngineer from "../pages/careers/VolunteerSoftwareEngineer";
import VolunteerUXDesigner from "../pages/careers/VolunteerUXDesigner";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/careers/volunteer-software-engineer",
    element: <VolunteerSoftwareEngineer />,
  },
  {
    path: "/careers/volunteer-ux-designer",
    element: <VolunteerUXDesigner />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
