import React, { Component } from 'react';
import HOCPosts from './HOCPosts';

class TablePosts extends Component {
    render() {
        const posts = this.props.posts
        const displayData = posts.map((post) => {
            return <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
            </tr>
        })


        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                        {displayData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HOCPosts(TablePosts);