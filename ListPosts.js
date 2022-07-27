import React, { Component } from 'react';
import HOCPosts from './HOCPosts';

class ListPosts extends Component {

    render() {
        const posts = this.props.posts
        const displayPosts = posts.map((post) => {
            return <ul>
                <li>{post.id}
                    <ul>
                        <li>{post.userId}</li>
                        <li>{post.title}</li>
                    </ul>
                </li>
            </ul>

        })

        return (
            <div>
                {displayPosts}
            </div>
        );
    }
}

export default HOCPosts(ListPosts);