// Import the createStore function from Redux to create the store
import { createStore } from 'redux';
// Import the reducer function that defines how the state is modified
import reducer from './reducer';

// Create the Redux store using the reducer function
const store = createStore(reducer);

// Export the store so that it can be used elsewhere in the application
export default store;
