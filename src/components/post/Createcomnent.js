
export default function CreateComment() {
 
  return (
    <div className="create_comment_wrap">
      <div className="create_comment">
        <img src="https://tse4.mm.bing.net/th?id=OIP.jODk4DVXLWGFKSW6r9NqAAHaE8&pid=Api&P=0}" alt="" />
        <div className="comment_input_wrap">
          <input
            type="file"
            hidden
            accept="image/jpeg,image/png,image/gif,image/webp"  
          />
        
          <input
            type="text"         
            placeholder="Write a comment..."
          />
          <div
            className="comment_circle_icon hover2"
          >
            <i className="emoji_icon"></i>
          </div>
          <div
            className="comment_circle_icon hover2"
          >
            <i className="camera_icon"></i>
          </div>
          <div className="comment_circle_icon hover2">
            <i className="gif_icon"></i>
          </div>
          <div className="comment_circle_icon hover2">
            <i className="sticker_icon"></i>
          </div>
        </div>
      </div>
      
        <div className="comment_img_preview">
          <img src="https://tse4.mm.bing.net/th?id=OIP.jODk4DVXLWGFKSW6r9NqAAHaE8&pid=Api&P=0" alt="" />
          <div
            className="small_white_circle"
          >
            <i className="exit_icon"></i>
          </div>
        </div>
    </div>
  );
}
