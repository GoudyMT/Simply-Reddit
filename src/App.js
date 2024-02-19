import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import SearchResults from './components/SearchResults';
import SubredditPage from './components/SubredditPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/r/:subredditName" element={<SubredditPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
