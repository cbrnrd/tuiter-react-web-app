import who from './who.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js";


const WhoToFollowList = () => {
  /*
    who:
    {
      avatarIcon: '../../images/virgin.png',
      userName: 'Virgin Galactic',
      handle: 'virgingalactic',
    },
    {
      ...
    }
  */


  let result = `
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex flex-row">
        <h5 class="card-title">Who to follow</h5>
        </div>
        </li>
        `;
  for (let i = 0; i < who.length; i++) {
    result += WhoToFollowListItem(who[i]);
  }

  result += `</ul>`;
  return result;

}


$(() => $('#wd-follow-list').append(WhoToFollowList()))
export default WhoToFollowList;
