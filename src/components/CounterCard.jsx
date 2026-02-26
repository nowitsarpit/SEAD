function CounterCard({ currentToken, onNext, onComplete }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Counter 1
      </h2>

      {currentToken ? (
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Serving: {currentToken.number}
          </p>
        </div>
      ) : (
        <p className="mb-4 text-gray-500">
          No customer currently being served
        </p>
      )}

      <div className="flex gap-3">
        <button
          onClick={onNext}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>

        <button
          onClick={onComplete}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Complete
        </button>
      </div>
    </div>
  );
}

export default CounterCard;