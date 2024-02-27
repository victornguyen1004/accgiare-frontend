import { Link } from "react-router-dom";
import "../styles/components/_header.scss";
import logoImg from "../assets/img/teemo-logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoImg} alt="" className="img-logo" />
      </Link>
      <div className="search-bar">Tìm kiếm</div>
      <nav className="user-action">
        <Link className="btn-top-up" to="/top-up">
          Nạp tiền
        </Link>
        <Link className="btn-notification" to="/notification">
          Thông báo
        </Link>
        <Link className="btn-login-register" to="/login">
          Đăng nhập/Đăng ký
        </Link>
      </nav>
    </div>
  );
};

export default Header;
