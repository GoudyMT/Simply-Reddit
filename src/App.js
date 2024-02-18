import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
// import SearchResults from './components/SearchResults'; // If you have a separate component for search results

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            {/* If you have a separate route for search results */}
            {/* <Route path="/search" element={<SearchResults />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
