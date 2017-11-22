import { connect } from 'react-redux';
import NewContributionForm from "./newContributionForm";
import { createContribution } from "../../actions/contribution_actions";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  createContribution: (contribution) => dispatch(createContribution(contribution))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewContributionForm);