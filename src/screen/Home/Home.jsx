import { useContext, useEffect, useState } from "react";
import { list} from "../../services/PostService";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";


const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        list()
          .then((post) => {
            setPosts(post);
          
          })
          .catch((err) => console.error(err));
      }, []);

    const {toggleTheme} = useContext(ThemeContext)      
    
    return (
        <div>
            <button className="btn btn-primary mb-3 mt-4 ms-5" onClick={toggleTheme}> Toggle theme </button>
            {posts.map((post) => {
                return (
                    <Link  to={`/${post.userId}/comments`} key={post.title} style={{textDecoration: 'none'}}>
                    <div className="ms-5">
                    {post.title}
                    </div>
                    </Link>
                   
                    )
                
            })}
        </div>
    );
};

export default Home;