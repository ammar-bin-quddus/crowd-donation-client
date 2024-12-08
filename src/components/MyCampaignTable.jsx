import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaignTable = ({ index, myCampaign, myCampData, setMyCampData }) => {
  const { _id, title, amount, deadline } = myCampaign;

  //console.log(myCampData)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-donation-server.vercel.app/addCampaign/${id}`, {
          method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Campaign Data has been deleted.",
              icon: "success",
            });
            const remainData = myCampData.filter(myCamp => myCamp._id !== _id);
            setMyCampData(remainData);
          }
        })
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{amount} BDT</td>
      <td>{new Date(deadline).toLocaleDateString()}</td>
      <td>
        <Link to={`/updateCampaign/${_id}`}>
          <button className="btn btn-neutral btn-outline btn-sm">Update</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-neutral btn-outline btn-sm ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyCampaignTable;
