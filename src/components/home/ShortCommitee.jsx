import React from "react";
import uuid4 from "uuid4";

export const ShortCommitee = () => {
  const commiteeImg = [
    {
      id: uuid4,
      uid: 1,
      img: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
      name: "Rahul 1",
      position: "President",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
    },
    {
      id: uuid4,
      uid: 3,
      img: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
      name: "Rahul 2",
      position: "Vice President",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
    },
    {
      id: uuid4,
      uid: 2,
      img: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
      name: "Rahul 8",
      position: "Secretary",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
    },
    {
      id: uuid4,
      uid: 4,
      img: "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
      name: "Rahul 4",
      position: "joint secretary",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
    },
  ];
  return (
    <div className="m-2 flex flex-col justify-content-center">
      <h3 className=" my-0 p-1 w-full font-bold bg-[#0095FF] leading-tight text-center text-white rounded-md">
        Committee Members :
      </h3>
      <div className="text-center my-4 flex flex-row md:flex-col justify-center items-center gap-8">
        {commiteeImg
          .filter((item) => item.uid === 1 || item.uid === 2)
          .map((item) => (
            <div
              key={item.id}
              className="flex md:flex-col flex-row justify-center items-center"
            >
              <div>
                <img src={item.img} alt="" className="h-40" />
                <h3>{item.name}</h3>
                <p>{item.position}</p>
                <button className="text-blue-500 py-1 px-2 rounded-md">
                  View Profile...
                </button>
              </div>
            </div>
          ))}
      </div>
      <button className="btn bg-teal-400 text-black py-1 px-2 my-4 rounded-md">
        View All Committee Members...
      </button>
    </div>
  );
};
