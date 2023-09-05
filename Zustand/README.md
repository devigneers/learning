# Zustand Tutorial

This tutorial will guide you through creating a simple React application using Zustand for state management. Zustand is a minimalistic, fast, and scaleable state management solution for React.

### Note
after complete this tutorial you can go and take a look to the counter app above

## Step 1: Create a React App

First, make sure you have Node.js and npm installed on your computer. If not, you can download and install them from [here](https://nodejs.org/). Then, create a new React application using Create React App:

```bash
npx create-react-app zustand-tutorial
cd zustand-tutorial
```

## Step 2: Install Zustand
Next, you'll need to install Zustand in your project. Open a terminal in your project's directory and run:
```bash
npm install zustand
```

## Step 3: Create a Simple Store
In Zustand, you manage your application's state using stores. Let's create a simple store that manages a count variable.

Create a file called store.js in your project's src directory:
```javascript
// src/store.js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;

```
Here, we've defined a store with an initial state containing a count variable and two functions, increment and decrement, to update the count.

## Step 4: Use the Store in a Component
Now, let's create a React component that uses our Zustand store to display and manipulate the count.

```javascript
// src/Counter.js
import React from 'react';
import useStore from './store';

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

```

## Step 5: Use the Component in App.js
Now, you can use the Counter component in your App.js file.
```javascript
// src/App.js
import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

```

## Step 6: Run Your App
Finally, start your React application:

```bash
npm start
```
Open your browser and go to http://localhost:3000 to see your app in action. You should see a counter that you can increment and decrement.
