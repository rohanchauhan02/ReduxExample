import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'; 
import {fetchPosts} from '../actions/postAction'
class Posts extends Component {
// constructor(props){
//     super(props);
//     this.state={
//         posts:[]
//     }
// }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")//fetch resourses asynchronously
    //   .then((response) => response.json())
    //   .then((data) => this.setState({posts:data}));
    this.props.fetchPosts();
  }
  componentDidUpdate(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    console.log("rendering")
      const postItems=this.props.posts.map(post=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      ));
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes={
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost:PropTypes.object
}


const mapStateToProps=state=>({
  posts:state.posts.items,
  newPost:state.posts.item
})
export default connect(mapStateToProps,{fetchPosts})(Posts);
