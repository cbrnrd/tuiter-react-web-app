import PostHomeListItem from "../tuits/post-summary-item";
import posts from './posts.json'

const PostHomeList = () => {
  return (
    <div className="list-group">
      {
        posts.map(post => {
          return (<PostHomeListItem key={post._id} post={post} />)
        })
      }
    </div>
  )
}

export default PostHomeList;
