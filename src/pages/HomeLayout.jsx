import React from "react";
import { Header, Navbar, Loading } from "../components";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="py-20 align-element">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
