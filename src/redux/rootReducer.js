const initialState = {
  tasks: [],
  emptyFields: {
    taskName: false,
    taskDate: false,
  },
  searchActivated: false,
  searchedTasks: [],
  valueOfTaskNameField: '',
  valueOfDateField: '',
  valueOfSearchTextField: '',
  valueOfSearchDateField: '',
  sortedByName: false,
  sortedByDate: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
