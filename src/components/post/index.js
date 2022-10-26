import { Link } from "react-router-dom";
import "./index.css";
import { Dots, Public } from "../../svg";
import ReactsPopup from "./ReactsPopup";
import CreateComment from "./Createcomnent";
import PostMenu from "./postMenu";
export default function Post() {

  return (
    <div className="post">
      <div className="post_header">
        <Link
          className="post_header_left"
        >
          <img src="https://tse1.mm.bing.net/th?id=OIP.AXUOlIoF2KlQRCygKLYfRAHaE8&pid=Api&rs=1&c=1&qlt=95&w=156&h=104" alt="" />
          <div className="header_col">
            <div className="post_profile_name">
              Duong van chat
              <div className="updated_p">
              dgh
              </div>
            </div>
            <div className="post_profile_privacy_date">
               3
               <Public color="#828387" />
            </div>
          </div>
        </Link>
        <div
          className="post_header_right hover1"
        >
          <Dots color="#828387" />
        </div>
      </div>
    
        <div
          className="post_bg"
          style={{ backgroundImage: `url(https://tse4.mm.bing.net/th?id=OIP.TPTOh3hwTNyqEYJfLLmuywHaJQ&pid=Api&P=0)` }}
        >
          <div className="post_bg_text">Dep vcl</div>
        </div>
    
        <>
        </>
   
      <div className="post_infos">
        <div className="reacts_count">
          <div className="reacts_count_imgs"></div>
          <div className="reacts_count_num"></div>
        </div>
        <div className="to_right">
          <div className="comments_count">13 comments</div>
          <div className="share_count">1 share</div>
        </div>
      </div>
      <div className="post_actions">
        <ReactsPopup />
        <div
          className="post_action hover1"
          onMouseOver={() => {
            setTimeout(() => {
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
            }, 500);
          }}
        >
          <i className="like_icon"></i>
          <span>Like</span>
        </div>
        <div className="post_action hover1">
          <i className="comment_icon"></i>
          <span>Comment</span>
        </div>
        <div className="post_action hover1">
          <i className="share_icon"></i>
          <span>Share</span>
        </div>
      </div>
      <div className="comments_wrap">
        <div className="comments_order"></div>
        <CreateComment />
      </div>
        <PostMenu />
      
    </div>
  );
}
