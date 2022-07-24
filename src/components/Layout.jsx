import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="bg-white dark:bg-slate-900">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
