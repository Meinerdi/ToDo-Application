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
const TOGGLE_SORT_BY_NAME = 'TOGGLE_SORT_BY_NAME';
const TOGGLE_SORT_BY_DATE = 'TOGGLE_SORT_BY_DATE';
const SORT_MAIN_TASKS = 'SORT_MAIN_TASKS';
const DELETE_MAIN_TASK = 'DELETE_MAIN_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const SET_ALL_DATA = 'SET_ALL_DATA';

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

    case TOGGLE_SORT_BY_NAME: {
      return {
        ...state,
        sortedByName: action.payload,
      };
    }

    case TOGGLE_SORT_BY_DATE: {
      return {
        ...state,
        sortedByDate: action.payload,
      };
    }

    case SORT_MAIN_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case DELETE_MAIN_TASK: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case COMPLETE_TASK: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case SET_ALL_DATA: {
      return {
        ...state,
        ...action.payload,
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

export const toggleSortByNameCreator = (payload) => ({
  type: TOGGLE_SORT_BY_NAME,
  payload,
});

export const toggleSortByDateCreator = (payload) => ({
  type: TOGGLE_SORT_BY_DATE,
  payload,
});

export const sortMainTasksCreator = (payload) => ({
  type: SORT_MAIN_TASKS,
  payload,
});

export const deleteMainTaskCreator = (payload) => ({
  type: DELETE_MAIN_TASK,
  payload,
});

export const completeTaskCreator = (payload) => ({
  type: COMPLETE_TASK,
  payload,
});

export const setAllDataCreator = (payload) => ({
  type: SET_ALL_DATA,
  payload,
});
