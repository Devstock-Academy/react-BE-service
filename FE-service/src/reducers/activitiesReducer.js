export const activityReducer = (state, action) => {
  if (action.type === 'add') {
    return {
      ...state,
      activities: [
        ...state.activities,
        {
          ...action.body,
          id: Math.random(),
        },
      ],
    }
  }
  if (action.type === 'delete') {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.id
      ),
    }
  }
  if (action.type === 'send') {
    const { id: elementId, ...rest } = state.activities.find(
      ({ id: cardId }) => cardId === action.id
    )
    action.postData(rest)
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== elementId
      ),
    }
  }
  if (action.type === 'togleForm') {
    return { ...state, isFormShown: !state.isFormShown }
  }
}
