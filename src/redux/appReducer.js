const initialState = {
  tasks: [],
  emptyFields: {
    taskName: false,
    taskDate: false,
  },
  searchActivated: false,
  searchedTasks: [],
  sortedByName: false,
  sortedByDate: false,
};

const ADD_TASK = 'ADD_TASK';
const TOGGLE_EMPTY_FIELDS = 'TOGGLE_EMPTY_FIELDS';

export const appReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case TOGGLE_EMPTY_FIELDS: {
      return {
        ...state,
        emptyFields: { ...state.emptyFields, ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
};

export const addTaskCreator = (payload) => ({ type: ADD_TASK, payload });
export const toggleEmptyFieldsCreator = (payload) => ({
  type: TOGGLE_EMPTY_FIELDS,
  payload,
});
