import "./appDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="appDownload">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="appDownload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
