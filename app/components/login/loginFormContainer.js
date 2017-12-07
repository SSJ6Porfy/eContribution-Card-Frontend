import { connect } from 'react-redux';
import LoginForm from "./LoginForm";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);