import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { ScrollToTop } from "../helper";

function EntryRoot() {
  return (
    <main className="bg-primaryBackgroundWhite">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default EntryRoot;
