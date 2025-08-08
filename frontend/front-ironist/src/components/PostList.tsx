import { Post } from '../types/Post';
import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
};


export default function PostList({ posts } : PostListProps) {
    const cards = posts.map((post) => { 
        return <li key={post.id}>
            <PostCard post={post}/>
            </li>; 
    });
    
    return (
        <ul>
            {cards}
        </ul>
    );
}