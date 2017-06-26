import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

const FIELDS = {
  title: {
    type: 'input'
    label: 'Title'
  },

  categories: {
    type: 'input'
    label: 'Categories'
  },

  content: {
    type: 'textarea'
    label: 'Content'
  }

};

class PostNew extends Component {
  onSubmit(props) {
    alert('Post Submitted');
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return(
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`};
      <label>{fieldConfig.label}</label>
      <{fieldConfig.type} type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {

      const { handleSubmit } = this.props;

    return(
        <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
          <h3> Create a New Post </h3>
          {_.map(FIELDS, this.renderField.bind(this))}
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}


function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });
  return errors;
}


export default reduxForm({
  form: 'PostsNew',
  fields: _.keys(FIELDS),
  validate
})(PostsNew);
