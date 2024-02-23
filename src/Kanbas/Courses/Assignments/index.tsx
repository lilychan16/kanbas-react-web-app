import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaClipboard } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

    return (
      <div className="ms-3 col-lg-10">
        <div className="d-flex justify-content-between">
          <div className="me-2">
            <input
              type="text"
              className="form-control ms-1"
              placeholder="Search for Assignment"
              id="search-assignment"
            />
          </div>
          <div className="float-end">
            <button className="btn btn-secondary me-1 button-color">
              <FaPlus /> Group
            </button>
            <button className="btn btn-danger me-1">
              <FaPlus /> Assignment
            </button>
            <button className="btn btn-secondary me-1 button-color button-size">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <button className="circle">40% of Total</button>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      <FaEllipsisV className="me-2" />
                      <FaClipboard
                        className="me-4"
                        style={{ color: "green" }}
                      />
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="assignment-setup"
                      >
                        <b>{assignment.title}</b> <br />
                        <p className="due-info">
                          Week starting on {assignment.start} | <b>Due</b>{" "}
                          {assignment.due} at 11:59pm | {assignment.total}pts
                        </p>
                      </Link>
                    </div>
                    <div className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
}

export default Assignments;