import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  // console.log(counter);

  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handeleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handeDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleTagChange = (id) => {
    // setTags(["tag4", "tag5"]);
    console.log(id);

    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };

  const renderTags = () => {
    // if (tags.length === 0) return "No Tags"; // 1-й вид условного рендеренга далее 2-й вид
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li
          key={tag}
          className="btn btn-primary btn-sm m-2"
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </li>
      ))
    );
  };

  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }
  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handeleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handeDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
