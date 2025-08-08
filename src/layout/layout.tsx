import Footer from "@/navigation/Footer";
import Header from "@/navigation/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
}