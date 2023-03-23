import { useEffect, useState } from "react";
import { list} from "../../services/PostService";
import { Link } from "react-router-dom";


const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        list()
          .then((post) => {
            setPosts(post);
          
          })
          .catch((err) => console.error(err));
      }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <Link to={`/${post.userId}/comments`} >
                    <div>
                    {post.title}
                    </div>
                    </Link>
                   
                    )
                
            })}
        </div>
    );
};

export default Home;