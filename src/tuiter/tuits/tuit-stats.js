import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="row">
                <a href="/#" className="col text-secondary text-decoration-none">
                    <i className="bi bi-chat-left-text-fill pe-2"></i>
                    <span>{tuit.replies}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <i className="bi bi-arrow-repeat pe-2"></i>
                    <span>{tuit.retuits}</span>
                </a>
                <a className="col text-secondary text-decoration-none">
                    {tuit.liked && <i className="bi bi-heart-fill text-danger pe-2"
                        onClick={() => { dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false })) }}
                    ></i>}
                    {!tuit.liked && <i className="bi bi-heart pe-2"
                        onClick={() => { dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })) }}
                    ></i>}
                    <span>{tuit.likes}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <i className="bi bi-upload"></i>
                </a>
            </div>
        </>
    )
}

export default TuitStats;