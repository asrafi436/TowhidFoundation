import { data } from "autoprefixer";
import uuid4 from "uuid4";

export const LeftAside = () => {
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
    <div className="text-center">
      {commiteeImg
        .filter((item) => item.uid === 1 || item.uid === 2)
        .map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
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
  );
};

export const RightAside = () => {
  const noticeList = [
    {
      id: uuid4,
      title: "Notice 1 Lorem ipsum dolor sit Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
      date: "2022-01-01",
    },
    {
      uuid: uuid4,
      title: "Notice 2 Lorem ipsum dolor sit Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
      date: "2022-06-06",
    },
    {
      uuid: uuid4,
      title: "Notice 3 Lorem ipsum dolor sit Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
      date: "2022-03-03",
    },
    {
      uuid: uuid4,
      title: "Notice 4 Lorem ipsum dolor sit Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
      date: "2022-01-01",
    },
    {
      uuid: uuid4,
      title: "Notice 5 Lorem ipsum dolor sit Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae.",
      date: "2022-05-05",
    },
  ];
  const sortedNoticeList = noticeList.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 leading-tight text-center ">
        Notice
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-500">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="border border-gray-500 px-4 py-2">Title</th>
                <th className="border border-gray-500 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedNoticeList.slice(0, 5).map((item) => (
                <tr key={item.id} className="hover:bg-green-500 hover:text-white hover:font-bold">
                  <td className="border border-gray-500 px-4 py-2">
                    {item.title.slice(0, 50)}...
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
