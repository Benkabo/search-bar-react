import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SearchBar from "./search";

const posts = [
  { id: "1", name: "Post ya kwanza" },
  { id: "2", name: "Uchaguzi mkuu 2020" },
  { id: "3", name: "Vitambulisho vya nida" },
  { id: "4", name: "Post ya mwisho, finale" },
];

const filterPost = (posts, query) => {
  if (!query) {
    return posts;
  }
  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || '')
  const filteredPost = filterPost(posts, query);
  return (
    <Router>
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        {filteredPost.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
    </Router>
  );
}

export default App;
