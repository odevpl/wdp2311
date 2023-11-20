export const allFeedbacks = ({ feedback }) => feedback;
export const feedbackCount = ({ feedback }) => feedback.length;

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
