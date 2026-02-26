import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function CustomerPage() {
  const { queue, setQueue, tokenCounter, setTokenCounter } =
    useContext(QueueContext);

  const handleJoinQueue = () => {
    const newToken = {
      id: Date.now(),
      number: `A-${tokenCounter}`,
      status: "Waiting",
    };

    setQueue([...queue, newToken]);
    setTokenCounter(tokenCounter + 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Customer Dashboard
      </h1>

      <button
        onClick={handleJoinQueue}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg mb-8"
      >
        Join Queue
      </button>

      <div className="grid gap-4">
        {queue.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">
              No customers waiting
            </p>
          </div>
        ) : (
          queue.map((token) => (
            <div
              key={token.id}
              className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
            >
              <span className="text-xl font-bold text-gray-900">
                {token.number}
              </span>

              <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                {token.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CustomerPage;