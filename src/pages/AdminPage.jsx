import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function AdminPage() {
  const {
    queue,
    counters,
    logs,
    setQueue,
    setCounters,
    setTokenCounter,
    setLogs,
  } = useContext(QueueContext);

  const handleReset = () => {
    if (!window.confirm("Reset system?")) return;

    setQueue([]);
    setCounters(
      counters.map((c) => ({ ...c, currentToken: null }))
    );
    setTokenCounter(1);
    setLogs([]);
    localStorage.removeItem("smartQueueState");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <p>Waiting: {queue.length}</p>
      <p>Serving: {counters.filter(c => c.currentToken).length}</p>
      <p>Served: {logs.length}</p>

      <button
        onClick={handleReset}
        className="mt-6 bg-red-500 text-white px-6 py-3 rounded"
      >
        Reset System
      </button>
    </div>
  );
}

export default AdminPage;