import { useNavigate } from "react-router-dom";

const MyDonateCard = ({ myDonate }) => {
  const { _id, photoUrl, title, description, deadline, type } = myDonate;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/campaigns/${_id}`);
  };

  return (
    <div className="card bg-base-100 h-[450px] shadow-xl">
      <figure>
        <img className="h-56 w-full" src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.slice(0, 150)} ...
          <span
            onClick={handleNavigate}
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
            Donation Date: {deadline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonateCard;
