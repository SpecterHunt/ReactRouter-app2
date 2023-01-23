import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

import React from "react";

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventsRootLayout;
