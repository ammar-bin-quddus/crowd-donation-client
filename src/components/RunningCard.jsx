import React from "react";
import { Link } from "react-router-dom";

const RunningCard = ({ running }) => {
  const { _id, photoUrl, title, description, deadline, type } = running;

  return (
    <div className="card bg-base-100 h-[450px] shadow-xl">
      <figure>
        <img className="h-56 w-full" src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-success text-white">Ongoing</div>
        </h2>
        <p>
          {description.slice(0, 150)} ...
          <span
            // onClick={handleNavigate}
            className="text-blue-600 cursor-pointer"
          >
            read more
          </span>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline font-semibold text-xs">
            {type}
          </div>
          <div className="badge badge-outline font-semibold text-xs">
            Deadline: {deadline}
          </div>
          <Link to={`/campaigns/${_id}`}>
            <button className="btn btn-neutral btn-xs btn-outline">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RunningCard;
