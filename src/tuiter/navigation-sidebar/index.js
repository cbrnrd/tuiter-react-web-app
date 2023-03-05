import React from "react";

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  return (
    <div className="list-group">
      <a className="list-group-item">
        <span
          className="d-none d-xl-inline">Tuiter</span></a>
      <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
        <i className="bi-house-fill"></i><span
          className="d-none d-xl-inline"> Home </span>
      </a>
      <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
        <i className="bi-hash"></i><span
          className="d-none d-xl-inline"> Explore</span>
      </a>
      <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
        <i className="bi-bell-fill"></i><span
          className="d-none d-xl-inline"> Notifications</span>
      </a>
      <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
        <i className="bi-envelope-fill"></i><span
          className="d-none d-xl-inline"> Messages</span>
      </a>
      <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
        <i className="bi-bookmark-fill"></i><span
          className="d-none d-xl-inline"> Bookmarks</span>
      </a>
      <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
        <i className="bi-list-task"></i><span
          className="d-none d-xl-inline"> Lists</span>
      </a>
      <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
        <i className="bi-person-fill"></i><span
          className="d-none d-xl-inline"> Profile</span>
      </a>
      <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
        <i className="bi-three-dots"></i><span
          className="d-none d-xl-inline"> More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;

