import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import PostCard from './components/PostCard'
import {mockPosts} from './data/mockPost'
import PostList from './components/PostList'

function App() {


  return (
    <>
      <Header />
      <main className="p-4 max-w-xl mx-auto">
      <PostList posts={mockPosts}/>
      {/* <PostCard post={mockPost}/> */}
      </main>
      <Footer/>
    </>
  )
}

export default App
