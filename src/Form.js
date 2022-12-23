import { useState } from "react";
import "./styles.css";

export default function Formm(props) {
  // const [name, setName] = useState("");
  // const [job, setJob] = useState("");

  return (
    <>
      <div>
        <form>
          <input
            name="namee"
            type="text"
            placeholder="Enter name"
            // value={props.name}
            onChange={props.handle}
          />
          <input
            name="job"
            type="text"
            placeholder="Enter job role"
            // value={props.job}
            onChange={props.handle}
          />
        </form>
      </div>

      <br />
    </>
  );
}
