import React from "react";
import { Link } from "react-router-dom";

const CampaignTable = ({ campaign, index }) => {
    
    const {_id, title, email, deadline, amount} = campaign;

  return (
      <tr>
        <th>{index + 1}</th>
        <td>{title}</td>
        <td>{email}</td>
        <td>{new Date(deadline).toLocaleDateString()}</td>
        <td>{amount}</td>
        <td>
          <Link to={`/campaigns/${_id}`}>
            <button className="btn btn-neutral btn-outline btn-sm">
              See More
            </button>
          </Link>
        </td>
      </tr>
  );
};

export default CampaignTable;
