import { Dots } from "../../svg";
import { stories } from "../../data/home";
import AddFriendSmallCard from "./addFriendSmall";

export default function PplYouMayKnow() {
  return (
    <div className="pplumayknow">
      <div className="pplumayknow_header">
        Người bạn có thể biết
        <div className="post_header_right ppl_circle hover1">
          <Dots />
        </div>
      </div>
      <div className="pplumayknow_list">
        {stories.map((item, i) => (
          <AddFriendSmallCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
