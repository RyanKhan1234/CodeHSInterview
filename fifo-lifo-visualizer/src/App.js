import React, { useState } from "react";
import "./App.css";

function App() {
  const [queue, setQueue] = useState([]); // Represents the queue (FIFO)
  const [stack, setStack] = useState([]); // Represents the stack (LIFO)

  // Add a person to the queue
  const enqueue = () => {
    const newPerson = `Person ${queue.length + 1}`;
    setQueue([...queue, newPerson]);
  };

  // Remove a person from the queue (FIFO)
  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift(); // Remove the first person
      setQueue(updatedQueue);
    }
  };

  // Add a pancake to the stack
  const push = () => {
    const newPancake = `Pancake ${stack.length + 1}`;
    setStack([...stack, newPancake]);
  };

  // Remove a pancake from the stack (LIFO)
  const pop = () => {
    if (stack.length > 0) {
      const updatedStack = [...stack];
      updatedStack.pop(); // Remove the last pancake
      setStack(updatedStack);
    }
  };

  return (
    <div className="App">
      <h1>Stack and Queue Visualizer</h1>

      {/* Queue Section */}
      <div className="container queue-container">
        <h2>Queue (McDonald's Line)</h2>
        <div className="visualization queue-visualization">
          {queue.map((person, index) => (
            <div key={index} className="person">
              🧑 {person}
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={enqueue}>Add Person (Enqueue)</button>
          <button onClick={dequeue}>Remove Person (Dequeue)</button>
        </div>
        <p>
          <strong>FIFO:</strong> The first person added is the first to leave.
        </p>
      </div>

      {/* Stack Section */}
      <div className="container stack-container">
        <h2>Stack (Pancakes)</h2>
        <div className="visualization stack-visualization">
          {/* Render the stack in reverse order */}
          {[...stack].reverse().map((pancake, index) => (
            <div key={index} className="pancake">
              🥞 {pancake}
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={push}>Add Pancake (Push)</button>
          <button onClick={pop}>Remove Pancake (Pop)</button>
        </div>
        <p>
          <strong>LIFO:</strong> The last pancake added is the first to be removed.
        </p>
      </div>
    </div>
  );
}

export default App;