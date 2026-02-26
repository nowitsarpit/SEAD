function TokenCard({ token }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "bg-yellow-200 text-yellow-800";
      case "Serving":
        return "bg-blue-200 text-blue-800";
      case "Completed":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <span className="text-lg font-semibold">{token.number}</span>

      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
          token.status
        )}`}
      >
        {token.status}
      </span>
    </div>
  );
}

export default TokenCard;