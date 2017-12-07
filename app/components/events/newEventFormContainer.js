import { connect } from 'react-redux';
import NewEventForm from "./newEventForm";
import { createEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);