import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../../services/PostService';
import './DetailPage.css'

const DetailPage = () => {
    const {userId} = useParams()

    const [comments, setComments] = useState([])

    useEffect(()=> {
        getComments(userId)
            .then((commentsDB) => {
                setComments(commentsDB)
                
            })
            .catch((err) => {console.error(err)})
    }, [userId])
    
 
    return (
        <div>
            <h1>User {userId}</h1>
            {comments.map((comment) => {
                return (
                    <div className='BoxComment' key={comment.name}>
                        <p><b>name: </b>{comment.name}</p>
                        <p><b>email: </b>{comment.email}</p>
                        <p><b>body: </b>{comment.body}</p>
                    </div>
                    )
            })}

        </div>
    );
};

export default DetailPage;