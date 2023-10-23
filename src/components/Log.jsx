import { Link } from "react-router-dom";

function Log({ log, id }) {
  return (
    <tr>
      <td>
        {/* {log.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )} */}
      </td>
      <td>
        <Link to={`/logs/${id}`}> {log.captainName}</Link>
      </td>
      <td>
        {" "}
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </td>
    </tr>
  );
}

export default Log;