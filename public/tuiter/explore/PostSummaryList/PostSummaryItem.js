function PostSummaryItem(post) {

  /*
  {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "image": "../../images/react-blue.png",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
  },
  */
  return `
 <div class="card mb-0 rounded-0">
 <div class="row g-0 justify-content-between">
     <div class="col-8">
         <div class="card-body w-auto">
             <h6 class="card-text text-muted mb-0">${post.topic}</h6>
             <h6 class="card-title">${post.userName}
             <i class="fas text-black fa-check-circle text-primary"></i> <small
                     class="text-muted h6"> - ${post.time}</small></h6>
             <p class="card-text h6">${post.title}</p>
         </div>
     </div>
     <div class="col-8 w-auto position-relative">
         <img src="${post.image}"
             class="position-absolute top-50 end-0 translate-middle-y" width="100px" height="100px"
             alt="...">
     </div>
 </div>
</div>
 `;

}
var p = {
  topic: "Web Development",
  userName: "ReactJS",
  time: "2h",
  image: "../../images/react-blue.png",
  title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
}

//$(() => $('#wd-post-summary').append(PostSummaryItem(p)));

export default PostSummaryItem;
