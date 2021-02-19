import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

function Header() {
  return (
    <header className="header">
      <h1>
        <Icon className="header-icon" icon={locationIcon} />
        Wildfire Tracker (Powered By NASA)
      </h1>
    </header>
  );
}

export default Header;
