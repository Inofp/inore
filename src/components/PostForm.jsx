import React, { useState } from "react";
import MyInput from "./UI/input/MyInput.jsx";
import MyButton from './UI/button/MyButton';



const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now(),
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      {/* Управляемый инпут / Двустороннее связывание */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
