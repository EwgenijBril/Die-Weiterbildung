import PostContainer from "../PostContainer";
import { useState,useEffect } from 'react';
import { posts_data } from '../../data/posts'
import { Context } from '../../context'
import AddPostForm from "../AddPostForm";

function App() {

  const [posts, setPost] = useState(posts_data)

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('posts'))
    if (res) setPost(res)
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);


  const change_like = (id) => {
    const target_card = posts.find(el => el.id === id);

    target_card.like = !target_card.like

    setPost([...posts])
  }

  const add_post = (title, text) => setPost([
    ...posts,
    {
      id: Date.now(),
      title: title ,
      text: text,
      like: false,
      comments: []
    }
  ])

  const add_comment = (post_id, text) => {
    const comment = {
      id: Date.now(),
      comment: text
    }

    const target_post = posts.find(el => el.id === post_id);
    target_post.comments.push(comment);
    setPost([...posts])
  }

  const delete_post = post_id => setPost(posts.filter(el =>el.id !==post_id))

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id);
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    setPost([...posts])
  }

  return (
    <div >
      <Context.Provider value={{ posts, change_like, add_post, add_comment, delete_post, delete_comment }}>
        <AddPostForm/>
        <PostContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;

//1. Вывести информацию (title, text, like) в PostsContainer, создавая для каждого объекта компонент Post. Используйте useContext()

//2. Если like false, то выводить текст 'Like?'. А если like true - выводить 'Liked'


