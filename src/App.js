import "./styles.css";
import Formm from "./Form";
import { useState } from "react";

export default function App() {
  const [arr, setArr] = useState([{ id: 1, name: "", job: "" }]);
  const [dis, setDis] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function handleInput(event) {
    // console.log(event.target.value);
    if (event.target.name === "namee") setName(event.target.value);
    if (event.target.name === "job") setJob(event.target.value);
  }

  function addForm(id) {
    arr[arr.length - 1] = { id: id, name: name, job: job };
    setArr((prevArr) => [...prevArr, { id: id + 1, name: "", job: "" }]);
    console.log(arr[arr.length - 1]);
    setName("");
  }

  return (
    <>
      <h1>Form</h1>
      {arr.map((element) => {
        return (
          <Formm
            key={element.id}
            idx={element.id}
            name={element.name}
            job={element.job}
            handle={handleInput}
            add={addForm}
          />
        );
      })}
      <button disabled={name.length === 0} onClick={() => addForm(arr.length)}>
        Add new experience
      </button>
    </>
  );
}
