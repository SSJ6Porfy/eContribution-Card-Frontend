import * as EventAPIUtil from "../util/events_util";

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

export const fetchEvents = () => dispatch => (
  EventAPIUtil.fetchEvents()
    .then(res => (dispatch(receiveAllEvents(res))
    ), err => (dispatch(receiveEventErrors(err.responseJSON))))
);
export const fetchEvent = (id) => dispatch => (
  EventAPIUtil.fetchEvent(id)
    .then(res => (dispatch(receiveEvent(res))
    ), err => (dispatch(receiveEventErrors(err.responseJSON))))
);
export const createEvent = (event) => dispatch => (
  EventAPIUtil.createEvent(event)
    .then(res => (dispatch(receiveEvent(res))
    ), err => (dispatch(receiveEventErrors(err.responseJSON))))
);
export const updateEvent = (event) => dispatch => (
  EventAPIUtil.updateEvent(event)
    .then(res => (dispatch(receiveEvent(res))
    ), err => (dispatch(receiveEventErrors(err.responseJSON))))
);

export const deleteEvent = (id) => dispatch => (
  EventAPIUtil.deleteEvent(id)
    .then(res => (dispatch(removeEvent(res))
    ), err => (dispatch(receiveEventErrors(err.responseJSON))))
);


export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});
export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
});

export const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});