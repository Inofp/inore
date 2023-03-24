import React, {useState} from "react";
import PostForm from "./components/PostForm";
// import Counter from "./components/Counter"; // поприкалываться со счётчиком
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'Limoona', body: 'Яна'},
    {id:2, title: 'Dusty', body: 'Даша'},
    {id:3, title: 'Spiritusik', body: 'Kirill'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  return (
    <div className="App">
      <PostForm create={ createPost } />
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
