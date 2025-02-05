import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const auth1 = localStorage.getItem("token");
    const auth2 = sessionStorage.getItem("token");

    console.log(auth1);
    console.log(auth2);
  }, []);

  const handleAdd = () => {
    localStorage.setItem(
      "token",
      JSON.stringify({ name: "pushkar", rollno: 52 })
    );

    sessionStorage.setItem("token", "this-is-a-token-sessionstorage");
  };

  const handleDelete = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2> Local Storage Data : </h2>
      <h2> About Page </h2>
      <button className="btn" onClick={handleAdd}>
        Add to Storage
      </button>
      <button className="btn" onClick={handleDelete}>
        Delete from Storage
      </button>
    </div>
  );
};

export default About;
