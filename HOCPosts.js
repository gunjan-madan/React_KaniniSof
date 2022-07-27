import React from "react";
import axios from 'axios';

const HOCPosts = OriginalComponent => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                posts: []
            }
        }
        componentDidMount = () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    this.setState({
                        posts: response.data
                    })
                })
        }

        render() {
            return <OriginalComponent posts={this.state.posts}></OriginalComponent>
        }
    }
    return NewComponent
}

export default HOCPosts