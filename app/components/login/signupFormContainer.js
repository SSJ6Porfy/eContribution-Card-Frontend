import { connect } from 'react-redux';
import SignupForm from "./signupForm";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);