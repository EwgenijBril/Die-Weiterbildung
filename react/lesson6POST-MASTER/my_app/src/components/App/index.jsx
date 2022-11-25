import PostContainer from "../PostContainer";
import { useState } from 'react';
import { posts_data } from '../../data/posts'
import { Context } from '../../context'
import AddPostForm from "../AddPostForm";

function App() {

  const [posts, setPost] = useState(posts_data)

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

  return (
    <div >
      <Context.Provider value={{ posts, change_like, add_post, add_comment  }}>
        <AddPostForm/>
        <PostContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;

//1. Вывести информацию (title, text, like) в PostsContainer, создавая для каждого объекта компонент Post. Используйте useContext()

//2. Если like false, то выводить текст 'Like?'. А если like true - выводить 'Liked'


