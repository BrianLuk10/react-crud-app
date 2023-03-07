import './App.css';
import React, { useEffect, useState} from 'react';
import AddPost from './component/addPost';
import Post from './component/Post';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h3>React Crud Using Jsonplaceholder</h3>

      <br />
      <AddPost onAdd={onAdd} />
      <div>
        {posts.map((post) => (
          <Post
            id={post.id}
            userId={post.userId}
            key={post.id}
            title={post.title}
            body={post.body}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
