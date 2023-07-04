import React from 'react';
import { useSelector } from "react-redux";
// import './Item.css'

const ItemDetail = () => {
  const { post } = useSelector((state) => state.detailsCard);
  
  if(!post) return <h1>Loading...</h1>
  
  return (
    <div className='item-detail' id="cards">
      <h2>Details Page For Post With ID {post.id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <p>User ID: {post.userId}</p>
      <h3>Title: {post.title}</h3>
      <p>Body: {post.body}</p>
  </div>
  )
}

export default ItemDetail


