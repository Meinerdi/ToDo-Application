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
const TOGGLE_SEARCH_ACTIVATED = 'TOGGLE_SEARCH_ACTIVATED';
const SET_SEARCHED_TASKS = 'SET_SEARCHED_TASKS';
const TOGGLE_SORT_BY = 'TOGGLE_SORT_BY';

export const appReducer = (state = initialState, action) => {
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

    case TOGGLE_SEARCH_ACTIVATED: {
      return {
        ...state,
        searchActivated: action.payload,
      };
    }

    case SET_SEARCHED_TASKS: {
      return {
        ...state,
        searchedTasks: action.payload,
      };
    }

    case TOGGLE_SORT_BY: {
      return {
        ...state,
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
export const toggleSearchActivatedCreator = (payload) => ({
  type: TOGGLE_SEARCH_ACTIVATED,
  payload,
});

export const setSearchedTasksCreator = (payload) => ({
  type: SET_SEARCHED_TASKS,
  payload,
});

export const toggleSortByCreator = (payload) => ({
  type: TOGGLE_SORT_BY,
  payload,
});
