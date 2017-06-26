import React from 'react';
import { connect } from 'react-redux';
import selectedPostsSelector from 'selectors/selected_posts';

const SelectedPostsList = (props) => {
  return (
    <ul className="list-group">
    {
      props.posts.map(post => {
        return <li className="list-group-item" key={post.id}>{post.title} </li>
      })
    }
    </ul>
  );
};


const mapStateToProps = state => {
  return {
    posts: selectedPostsSelector(state)
  };
};

export default connect(mapStateToProps)(SelectedPostsList);
