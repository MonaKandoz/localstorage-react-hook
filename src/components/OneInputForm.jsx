import { useEffect, useState } from "react";

const OneInputForm = () => {
  const [name, setName] = useState(()=>{
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
  });

  //localStorage.setItem("key","value")
  useEffect(()=>{
    localStorage.setItem("name", JSON.stringify(name))
  },[name])
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default OneInputForm;