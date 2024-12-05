import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaignForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photo.value;
    const title = form.title.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const deadline = form.deadline.value;
    const type = form.type.value;
    const email = form.email.value;
    const userName = form.userName.value;

    const newCampaign = {
      photoUrl,
      title,
      description,
      amount,
      deadline,
      type,
      email,
      userName,
    };
    console.log(newCampaign);

    // send data to server

    fetch("http://localhost:5173/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-3xl text-center">Add a New Campaign</h1>
      <form onSubmit={(e) => handleAddCampaignForm(e)} className="card-body">
        {/* image url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="enter your photo url"
            className="input input-bordered"
            required
          />
        </div>
        {/* campaign title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="enter title"
            className="input input-bordered"
            required
          />
        </div>
        {/* campaign type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Campaign Type</span>
          </label>
          <select name="type" className="select select-bordered">
            <option value="personal-issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative-ideas">Creative Ideas</option>
          </select>
        </div>
        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            placeholder="description"
            name="description"
            className="textarea textarea-bordered textarea-md w-full"
          ></textarea>
        </div>
        {/* donation amount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Minimum donation amount</span>
          </label>
          <input
            type="number"
            name="amount"
            placeholder="enter amount"
            className="input input-bordered"
            required
          />
        </div>
        {/* deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* user email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        {/* user name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;
