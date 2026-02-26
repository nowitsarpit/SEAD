import { createContext, useState, useEffect } from "react";

export const QueueContext = createContext();

export const QueueProvider = ({ children }) => {
  const defaultCounters = [
    { id: 1, currentToken: null },
    { id: 2, currentToken: null },
  ];

  const [queue, setQueue] = useState([]);
  const [counters, setCounters] = useState(defaultCounters);
  const [tokenCounter, setTokenCounter] = useState(1);
  const [logs, setLogs] = useState([]);
  const [userRole, setUserRole] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("smartQueueState");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setQueue(parsed.queue || []);
        setCounters(parsed.counters || defaultCounters);
        setTokenCounter(parsed.tokenCounter || 1);
        setLogs(parsed.logs || []);
        setUserRole(parsed.userRole || null);
      } catch {
        localStorage.removeItem("smartQueueState");
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    const state = {
      queue,
      counters,
      tokenCounter,
      logs,
      userRole,
    };
    localStorage.setItem("smartQueueState", JSON.stringify(state));
  }, [queue, counters, tokenCounter, logs, userRole]);

  return (
    <QueueContext.Provider
      value={{
        queue,
        setQueue,
        counters,
        setCounters,
        tokenCounter,
        setTokenCounter,
        logs,
        setLogs,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
};