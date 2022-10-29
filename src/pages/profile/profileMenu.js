import { Link } from "react-router-dom";
import { Dots } from "../../svg";

export default function ProfileMenu() {
  return (
    <div className="profile_menu_wrap">
      <div className="profile_menu">
        <Link to="/" className="profile_menu_active">
          Bài viết
        </Link>
        <Link to="/" className="hover1">
          Giới thiệu
        </Link>
        <Link to="/" className="hover1">
          Bạn bè
        </Link>
        <Link to="/" className="hover1">
          Ảnh
        </Link>
        <Link to="/" className="hover1">
          Video
        </Link>
        <Link to="/" className="hover1">
          Check-in
        </Link>
        <Link to="/" className="hover1">
          Xem thêm
        </Link>
        <div className="p10_dots">
          <Dots />
        </div>
      </div>
    </div>
  );
}
