import "./Drawer.css";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Drawer() {
  return (
    <div className="Drawer__Container">
      <ul className="Drawer__Contents__Container">
        <li className="Drawer__Content">가계부 관리</li>
        <li className="Drawer__Content">월별 자산관리</li>
      </ul>
      <div className="Setting__Content">
        <SettingsIcon fontSize="large"></SettingsIcon>
        <span>설정</span>
      </div>
    </div>
  );
}
