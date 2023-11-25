import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import gif007 from "../assets/gif007.gif";
import { useEffect, useState } from "react";

export default function App() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    });
    return () => clearInterval(interval);
  }, []);

  const popupContainerStyle = {
    transform: second > 2 ? "translateY(-100vh)" : "none",
    transition: "transform 2s ease-in-out",
  };
  return (
    <>
      <div className="app__gif">
        <div className="popupContrainer" style={popupContainerStyle}>
          <div className="popupContent">
            <img src={gif007} alt="Devscot, Dev, samundri" />
          </div>
        </div>
      </div>
      <Header />
      <Outlet />;
      <Footer />
    </>
  );
}
