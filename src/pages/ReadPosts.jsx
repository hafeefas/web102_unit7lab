import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select();

            if (error) {
                console.error('Error fetching posts:', error);
            } else {
                setPosts(data);
            }
        };
        fetchPosts()
    }, [])

    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts