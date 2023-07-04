import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions/actionUsers";
import { useNavigate } from "react-router-dom";
import { addCardDetail} from "./actions/actionItemDetail";
import './Home.css'

const Home = () => {
    const { loading, posts, error } = useSelector(state => state.posts);
    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])
   

    function handleCards(post) {
        dispatch( addCardDetail(post));
        navigate(`/item/${post.id}`);
      
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div className="main">
            {posts && posts.map((post) => {
                return (
                    <div className="card" key={post.id} onClick={() => { handleCards(post) }}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        <p>User ID: {post.userId}</p>
                        <h3>Title: {post.title.slice(0, 15)}...</h3>
                        <p>Body: {post.body.slice(0, 45)}</p>
                        <p>Read More...</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home


