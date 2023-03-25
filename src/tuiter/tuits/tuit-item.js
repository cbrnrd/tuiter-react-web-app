/*
    Example tuit:
     {
   "_id": 234,
   "topic": "Space",
   "userName": "SpaceX",
   "time": "2h",
   "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
   "image": "spacex.png",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
 }
 */
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTuit(id));
      }
      
    return (

        <div className="list-group-item pt-3 border-1">
            {/*User icon*/}
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${tuit.image}`} className="rounded-circle" width="48px" alt="avatar" />
                </div>
                {/*handle and time*/}
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end" onClick={() => handleDelete(tuit._id)}></i>
                        <span className="fw-bold pe-1">{tuit.userName}</span>
                        <i className="bi bi-check-circle-fill text-primary pe-2"></i>
                        <span className="text-muted pe-1">{tuit.handle}</span>
                        <span className="text-muted pe-1">·</span>
                        <span className="text-muted pe-1">{tuit.time}</span>
                    </div>
                    {/*Tuit content*/}
                    <div className="mb-4">
                        <p>{tuit.tuit}</p>
                    </div>

                    {/*Tuit actions*/}
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </div>

    )
};

export default TuitItem;
