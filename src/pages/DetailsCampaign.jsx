import React from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const DetailsCampaign = () => {
  const detailsData = useLoaderData();
  //console.log(detailsData);

  const {
    _id,
    title,
    userName,
    email,
    deadline,
    amount,
    description,
    photoUrl,
    type,
  } = detailsData;

  const handleDonate = () => {
    fetch(`http://localhost:5000/campaigns/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detailsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Donation Successful",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-3">
        <NavBar />
      </div>
      <div className="card card-compact bg-base-100 shadow-xl my-8">
        <figure>
          <img
            className="rounded-lg md:w-[80%] md:h-[500px]"
            src={photoUrl}
            alt={title}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="font-mono">{description}</p>
          <p className="text-xl font-bold">Deadline: {deadline}</p>
          <p className="text-xl font-bold">
            Minimum donation amount: {amount} BDT
          </p>
          <div className="card-actions justify-center">
            <button onClick={handleDonate} className="btn btn-neutral">
              Donate
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailsCampaign;
