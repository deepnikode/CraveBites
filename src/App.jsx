import { useEffect, useState } from "react";
import "./Style.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Orientation from "./components/Orientation.jsx";
import store from "./Utils/store.js";

const App = () => {
  //Location Context ----------------------------
  // const [location, setLocation] = useState({
  //   latitude: 18.6161,
  //   longitude: 73.7286,
  // });
  // const [city, setCity] = useState("Pune");

  // useEffect(() => {
  //   const successCallback = (position) => {
  //     const { latitude, longitude } = position?.coords;
  //     console.log(latitude, longitude);
  //     setLocation({
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //   };
  //   const errorCallback = (error) => {
  //     console.log(error);
  //   };
  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  // }, []);

  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );
  useEffect(() => {
    const handleOrientationChange = (event) => {
      setIsPortrait(event.matches);
    };
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", handleOrientationChange);
    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);
  //----------------------------

  return isPortrait ? (
    <Orientation />
  ) : (
    <Provider store={store}>
      <div className="app">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={30}
          containerClassName="notification-container"
          toastOptions={{
            className: "notification-toast",
            duration: 1500,
          }}
        />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
