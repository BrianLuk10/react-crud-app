
import React from 'react'
import "./Post.css"

const Post = ({id,userId,title,body,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <div class="forum-item">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="forum-icon">
                                <i class="fa fa-shield"></i>
                            </div>
                            <a href="forum_post.html" class="forum-item-title">Title : {title}</a>
                            <div class="forum-sub-title">body : {body}</div>
                        </div>
                        <div class="col-md-1 forum-info">
                            <span class="views-number">
                                User Id
                            </span>
                            <div>
                                <small>{userId}</small>
                            </div>
                        </div>
                        <div class="col-md-1 forum-info">
                        <button type="button" class="btn btn-danger" onClick={handleDelete}>delete</button>

                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default Post