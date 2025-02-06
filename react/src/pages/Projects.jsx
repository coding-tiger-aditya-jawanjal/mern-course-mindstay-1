import { useEffect } from "react";

const Projects = () => {
  // useEffect

  useEffect(() => {
    setTimeout(() => {
      alert("Alert message from Me : ");
    }, 2000);
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default Projects;
