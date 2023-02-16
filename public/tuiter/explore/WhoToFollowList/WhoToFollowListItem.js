
function WhoToFollowListItem(user) {
  return `
  <li class="list-group-item">
  <div class="d-flex flex-row">
      <img src="${user.avatarIcon}"
          class="rounded-circle" width="48px" height="48px" alt="...">
      <div class="d-flex flex-column ms-3">
          <h6><b>${user.userName}</b> <i
                  class="fas text-black fa-check-circle text-primary"></i></h6>
          <h6 class="text-muted">@${user.handle}</h6>

      </div>
      <div class="ms-auto d-flex align-items-center">
          <button type="button"
              class="btn btn-primary btn-sm rounded-pill px-3 align-items-center">Follow</button>
      </div>
  </div>
</li>
  `;
}

var who = {
  avatarIcon: 'https://www.c-r-y.org.uk/wp-content/uploads/2016/10/Virgin-logo.png',
  userName: 'Virgin Galactic',
  handle: 'virgingalactic',
}

$(() => $('#wd-follow-list-item').append(WhoToFollowListItem(who)))
export default WhoToFollowListItem;
