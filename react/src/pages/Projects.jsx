import { useEffect } from "react";
import Post from "../components/Post";

const Projects = () => {
  // useEffect

  useEffect(() => {
    setTimeout(() => {
      alert("Alert message from Me : ");
    }, 2000);
  }, []);

  return (
    <div>
      <Post number={26} />
    </div>
  );
};

export default Projects;
