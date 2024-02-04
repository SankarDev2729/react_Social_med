import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
// import Post from "./Post";
// import PostLayout from "./PostLayout";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import api from "./api/posts";
import EditPost from "./EditPost";
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./Context/DataContext";

function App() {
  // const [posts, setPosts] = useState([
  //   // {
  //   //   id: 1,
  //   //   title: "My First Post",
  //   //   datatime: "July 01, 2021 11:17:36 AM",
  //   //   body: "Made a video about Tesla 01 results",
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: "My 2nd Post",
  //   //   datatime: "July 01, 2021 11:17:36 AM",
  //   //   body: "I attended a Defi blockchain event",
  //   // },
  //   // {
  //   //   id: 3,
  //   //   title: "My 3rd Post",
  //   //   datatime: "July 01, 2021 11:17:36 AM",
  //   //   body: "I attended a Defi blockchain event",
  //   // },
  //   // {
  //   //   id: 4,
  //   //   title: "My Fourth Post",
  //   //   datatime: "July 01, 2021 11:17:36 AM",
  //   //   body: "ETH will outerperform BTC",
  //   // },
  // ]);
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const navigate = useNavigate();
  // const { width } = useWindowSize();
  // const { data, fetchError, isLoading } = useAxiosFetch(
  //   "http://localhost:3500/posts"
  // );

  // // useEffect(() => {
  // //   const fetchPosts = async () => {
  // //     try {
  // //       const response = await api.get("/posts");
  // //       setPosts(response.data);
  // //     } catch (err) {
  // //       if (err.response) {
  // //         //Not in the 200 response range
  // //         console.log(err.response.data);
  // //         console.log(err.response.status);
  // //         console.log(err.response.headers);
  // //       } else {
  // //         console.log(`Error: ${err.message}`);
  // //       }
  // //     }
  // //   };
  // //   fetchPosts();
  // // }, []);

  // useEffect(() => {
  //   setPosts(data);
  // }, [data]);

  // useEffect(() => {
  //   const filteredResults = posts.filter(
  //     (post) =>
  //       post.body.toLowerCase().includes(search.toLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLowerCase())
  //   );

  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datatime = format(new Date(), "MMMM dd yyyy pp");
  //   const newPost = { id, title: postTitle, datatime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     // const allPosts = [...posts, newPost];
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle("");
  //     setPostBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   const datatime = format(new Date(), "MMMM dd yyyy pp");
  //   const updatedPost = { id, title: editTitle, datatime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts.filter((post) => post.id !== id);
  //     setPosts(postsList);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <div className="App">
      <DataProvider>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
        {/* <li>
            <Link to="/newpost">Newpost</Link>
          </li> */}
        {/* <li>
            <Link to="/postpage">Postpage</Link>
          </li>
        </ul>
      </nav> */}
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} /> */}
        {/* <Route path="/postpage" element={<PostPage />} />
        <Route path="/postpage/:id" element={<Post />} />
        <Route path="/postpage/newpost" element={<NewPost />} /> */}
        {/* <Route path="/postpage"> */}
        {/* <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes> */}
        <Header
          title="Course Social Media"
          // width={width}
        />
        <Nav
        // search={search}
        // setSearch={setSearch}
        />
        {/* <Home posts={posts} /> */}
        {/* <Home posts={searchResults} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
              // posts={searchResults}
              // fetchError={fetchError}
              // isLoading={isLoading}
              />
            }
          />
          <Route path="post">
            <Route
              index
              element={
                <NewPost
                // handleSubmit={handleSubmit}
                // postTitle={postTitle}
                // setPostTitle={setPostTitle}
                // postBody={postBody}
                // setPostBody={setPostBody}
                />
              }
            />
            <Route
              path=":id"
              element={
                <PostPage
                // posts={posts}
                // handleDelete={handleDelete}
                />
              }
            />
          </Route>

          <Route
            path="/edit/:id"
            element={
              <EditPost
              // posts={posts}
              // handleEdit={handleEdit}
              // editBody={editBody}
              // setEditBody={setEditBody}
              // editTitle={editTitle}
              // setEditTitle={setEditTitle}
              />
            }
          />

          {/* <PostPage /> */}
          {/* <About /> */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />

          {/* <Missing /> */}
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
