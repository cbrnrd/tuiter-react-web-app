const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
        <!-- continue rest of list, e.g.,
             Home, Explore, Notifications,  Messages, etc. -->
          <a class="list-group-item" href="/home">
            <i class="fas fa-home"></i> Home</a>
          <a class="list-group-item" href="/explore">
            <i class="fas fa-hashtag"></i> Explore</a>
          <a class="list-group-item" href="/notifications">
            <i class="fas fa-bell"></i> Notifications</a>
          <a class="list-group-item" href="/messages">
            <i class="fas fa-envelope"></i> Messages</a>
          <a class="list-group-item" href="/bookmarks">
            <i class="fas fa-bookmark"></i> Bookmarks</a>
          <a class="list-group-item" href="/lists">
            <i class="fas fa-list"></i> Lists</a>
          <a class="list-group-item" href="/profile">
            <i class="fas fa-user"></i> Profile</a>
          <a class="list-group-item" href="/more">
            <i class="fas fa-ellipsis-h"></i> More</a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
 }

 //$(() => $('#wd-explore').append(NavigationSidebar()))
 export default NavigationSidebar;
