import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { useState } from "react";
import { toast } from "react-toastify";

const DetailsCampaign = () => {
  const detailsData = useLoaderData();
  //console.log(detailsData);
  const [isExpired, setIsExpired] = useState(false);

  const {
    _id,
    title,
    userName,
    email,
    deadline,
    amount,
    description,
    photoUrl,
  } = detailsData;

  const handleDonate = () => {
    fetch(`https://crowd-donation-server.vercel.app/campaigns/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detailsData),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);
        setIsExpired(deadlineDate < currentDate);
        // if (isExpired) {
        //   toast.error(
        //     "You can't donate to this campaign as the deadline has passed."
        //   );
        //   return;
        // }
        if (data.insertedId && !isExpired) {
          Swal.fire({
            title: "Success!",
            text: "Donation Successful",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          toast.error(
            "You can't donate to this campaign as the deadline has passed."
          );
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
