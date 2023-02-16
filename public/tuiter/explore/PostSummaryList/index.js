import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

function PostSummaryList() {
  return `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card mb-0 rounded-0">
          <div class="card-body">
            <h5 class="card-title">Explore</h5>
            <div id="wd-post-summary">
              ${exploreItems.map((post) => PostSummaryItem(post)).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

export default PostSummaryList;
