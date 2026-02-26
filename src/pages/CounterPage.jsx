import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function CounterPage() {
  const { queue, setQueue, counters, setCounters, logs, setLogs } =
    useContext(QueueContext);

  const handleNext = (counterId) => {
    if (queue.length === 0) return;

    const nextToken = {
      ...queue[0],
      status: "Serving",
      startTime: new Date().toISOString(),
    };

    setQueue(queue.slice(1));

    const updatedCounters = counters.map((counter) =>
      counter.id === counterId
        ? { ...counter, currentToken: nextToken }
        : counter
    );

    setCounters(updatedCounters);
  };

  const handleComplete = (counterId) => {
    const counter = counters.find((c) => c.id === counterId);
    if (!counter?.currentToken) return;

    const completedToken = {
      ...counter.currentToken,
      status: "Completed",
      endTime: new Date().toISOString(),
      counterId,
    };

    setLogs([...logs, completedToken]);

    const updatedCounters = counters.map((c) =>
      c.id === counterId ? { ...c, currentToken: null } : c
    );

    setCounters(updatedCounters);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Counter Dashboard</h1>

      {counters.map((counter) => (
        <div key={counter.id} className="bg-white p-6 mb-6 rounded shadow">
          <h2>Counter {counter.id}</h2>

          <p className="mb-4">
            {counter.currentToken
              ? `Serving: ${counter.currentToken.number}`
              : "No customer serving"}
          </p>

          <button
            onClick={() => handleNext(counter.id)}
            className="bg-green-500 text-white px-4 py-2 mr-3 rounded"
          >
            Next
          </button>

          <button
            onClick={() => handleComplete(counter.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterPage;