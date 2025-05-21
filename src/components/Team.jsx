import Marquee from "react-fast-marquee";

const Team = () => {
  const review = [
    {
      image: "https://i.pravatar.cc/150?img=1",
      name: "Ariana Smith",
    },
    {
      image: "https://i.pravatar.cc/150?img=2",
      name: "Michael Johnson",
    },
    {
      image: "https://i.pravatar.cc/150?img=3",
      name: "Fatima Noor",
    },
    {
      image: "https://i.pravatar.cc/150?img=4",
      name: "Daniel Kim",
    },
    {
      image: "https://i.pravatar.cc/150?img=5",
      name: "Sophia Lee",
    },
    {
      image: "https://i.pravatar.cc/150?img=7",
      name: "Emma Davis",
    },
  ];

  return (
    <div className="my-16">
      {/* Heading */}
      <div className="my-6 text-center px-5 mx-auto">
        <h3 className="text-3xl font-bold my-2 text-base-content">Meet Our Team</h3>
      </div>

      {/* Card Marquee */}
      <div className="gap-7">
        <Marquee pauseOnHover={true} speed={200}>
          {review?.map((data, index) => (
            <div
              key={index}
              className="md:w-80 w-72 bg-gray-900 text-white p-6 my-4 rounded-lg shadow-md border border-yellow-500 hover:scale-105 transition-transform duration-300 mx-5"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 mx-auto">
                <img
                  src={data.image}
                  alt="Review"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="mt-3 text-2xl font-bold text-center text-yellow-400">
                {data.name}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Team;
