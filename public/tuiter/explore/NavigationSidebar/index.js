const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
        <!-- continue rest of list, e.g.,
             Home, Explore, Notifications,  Messages, etc. -->
          <a class="list-group-item" href="/home">
            <i class="fas fa-home"></i> <span
            class="d-none d-xl-inline">Home</span></a>
          <a class="list-group-item" href="/explore">
            <i class="fas fa-hashtag"></i> <span
            class="d-none d-xl-inline">Explore</span></a>
          <a class="list-group-item" href="/notifications">
            <i class="fas fa-bell"></i> <span
            class="d-none d-xl-inline">Notifications</span></a>
          <a class="list-group-item" href="/messages">
            <i class="fas fa-envelope"></i> <span
            class="d-none d-xl-inline">Messages</span></a>
          <a class="list-group-item" href="/bookmarks">
            <i class="fas fa-bookmark"></i> <span
            class="d-none d-xl-inline">Bookmarks</span></a>
          <a class="list-group-item" href="/lists">
            <i class="fas fa-list"></i> <span
            class="d-none d-xl-inline">Lists</span></a>
          <a class="list-group-item" href="/profile">
            <i class="fas fa-user"></i> <span
            class="d-none d-xl-inline">Profile</span></a>
          <a class="list-group-item" href="/more">
            <i class="fas fa-ellipsis-h"></i> <span
            class="d-none d-xl-inline">More</span></a>
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
