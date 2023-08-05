import AngularImage from "./images/Angular.jpg";
import ReactImage from "./images/reactjs.jpg";
import VueImage from "./images/vuejs.jpg";
import JavascriptImage from "./images/javascript.jpg";
import "./Course.css";

const courseMap = {
  AngularImage: AngularImage,
  ReactImage: ReactImage,
  VueImage: VueImage,
  JavascriptImage: JavascriptImage,
};

function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="imaged" />
    </div>
  );
}
export default Course;
