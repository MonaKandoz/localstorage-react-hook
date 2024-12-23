import { useState } from "react";
import {useLocalStorage} from "../useLocalStorage";

const TwoInputForm= () => {
  const [name, setName] = useLocalStorage("name","");
  const [checked, setChecked] = useLocalStorage("checked",false);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        Not a robot?
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default TwoInputForm;