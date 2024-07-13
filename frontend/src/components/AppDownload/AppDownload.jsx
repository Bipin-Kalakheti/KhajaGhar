import "./appDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="appDownload">
      <p>
        For Better Experience Download <br /> Khaja Ghar App
      </p>
      <div className="appDownload-platforms" id="appDownload">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
