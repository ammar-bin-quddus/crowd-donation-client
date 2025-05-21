import { Data } from "@react-google-maps/api";
import { FaCalendar, FaTag } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

const MyDonateCard = ({ myDonate }) => {
  if (!myDonate) return null;

  const { campaignImage, campaignTitle, donatedAmount, donatedAt } = myDonate;

  const donation_data = new Date(donatedAt).toLocaleString().split(",");

  const [donation_date, donation_time] = donation_data;

  return (
    <div
      className="bg-gray-900 text-white p-6 rounded-lg shadow-md border border-yellow-500 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={campaignImage}
        alt={campaignTitle}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="mt-1 flex items-center text-xl font-semibold text-yellow-400">
        <FaTag className="mr-2 text-yellow-400" /> {campaignTitle}
      </h2>
      <p className="mt-1 flex  items-center">
        <HiCurrencyBangladeshi className="mr-2 text-xl text-yellow-200" /> Donation amount:{" "}
        <span className="text-yellow-200">{donatedAmount} BDT</span>
      </p>
      <p className="mt-1 flex items-center">
        <FaCalendar className="mr-2 text-xl text-yellow-200" /> Donation date:{" "}
        <span className="text-yellow-200">{donation_date}</span>
      </p>
      <p className="mt-1 flex items-center">
        <IoMdTime className="mr-2 text-xl text-yellow-200" /> Donation time:{" "}
        <span className="text-yellow-200">{donation_time}</span>
      </p>
    </div>
  );
};

export default MyDonateCard;
