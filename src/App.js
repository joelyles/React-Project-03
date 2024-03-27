import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post No. One",
      datetime: "March 27, 2024",
      body: "lorem lorem lorem lorem lorem"
    },
    {
      id: 2,
      title: "Post No. Two",
      datetime: "March 27, 2024",
      body: "Hey lorem lorem lorem lorem lorem"
    }
  ])
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout
          search={search}
          setSearch={setSearch}
        />}>
          <Route index element={<Home posts={posts}/>}/>
          <Route path="/post">
            <Route index element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
