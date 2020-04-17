1. What problem does the context API help solve?
   It prevents prop drilling and provides a central location for components to access state

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions: A block of code that allows us to respond to interactions the user has with the application. Actions contain the type of action and the data associated with it and that gets passed on to the reduce
- Reducers: They specify how the application state changes based on the types of actions that take place.
- Store: The single source of truth because data flows in one direction only. The store contains all the applications state and bring the reducers and actions together.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is available through-out the whole application. This is useful when the application is small and won’t need to pass a lot of data around. Component state is state that lives in a component and may only be needed by that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk are functions that allows us to write async code. We can delay actions and make API calls from the action creators. This is possible because reds middleware intercepts the normal redux flow.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   -Context API - it seems simpler and less code to write
