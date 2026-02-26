import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";

function DisplayPage() {
  const { queue, counters } = useContext(QueueContext);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl mb-10 text-center">
        Live Display
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Now Serving</h2>
        {counters.map(
          (counter) =>
            counter.currentToken && (
              <div key={counter.id}>
                Counter {counter.id}:{" "}
                {counter.currentToken.number}
              </div>
            )
        )}
      </div>

      <div>
        <h2 className="text-2xl mb-4">Upcoming</h2>
        {queue.map((token) => (
          <div key={token.id}>{token.number}</div>
        ))}
      </div>
    </div>
  );
}

export default DisplayPage;