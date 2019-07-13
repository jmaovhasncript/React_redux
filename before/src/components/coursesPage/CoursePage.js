import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
  }
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    debugger;
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    debugger;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course </h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.Object
};
function mapStateToProps(state,ownProps) {
  debugger;
  return { courses: state.course };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
