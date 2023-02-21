import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounter] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounter(newCounters);
  };
  const handleReset = () => {
    console.log("handle reset");
    setCounter(initialState);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((item) =>
      item.id === id ? { ...item, value: item.value + 1 } : item
    );
    setCounter(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((item) =>
      item.id === id ? { ...item, value: item.value - 1 } : item
    );
    setCounter(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
