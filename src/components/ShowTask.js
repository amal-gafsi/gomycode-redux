import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListTasks from "./Task";

const ShowTask = () => {
  const listToDos = useSelector((state) => state.reducerTask.tasks);
  const [show, setShow] = useState("all");

  const filterDone = () => {
    listToDos.filter((el) => el.isDone === true);
    setShow("done");
  };

  const filterUnDone = () => {
    listToDos.filter((el) => el.isDone === false);
    setShow("unDone");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          className="btn btn-success"
          style={{ margin: "1%" }}
          onClick={() => {
            filterDone();
          }}
        >
          Show Done
        </button>

        <button
          className="btn btn-danger"
          style={{ margin: "1%" }}
          onClick={() => {
            filterUnDone();
          }}
        >
          Show unDone
        </button>
      </div>

      {/* {console.log(listToDos.filter((el) => el.isDone === false))} */}

      {/* {show === "all" && <ListTasks list={listToDos} />}

      {show === "done" && (
        <ListTasks list={listToDos.filter((el) => el.isDone === true)} />
      )}

      {show === "unDone" && (
        <ListTasks list={listToDos.filter((el) => el.isDone === false)} />
      )} */}
    </>
  );
};

export default ShowTask;
