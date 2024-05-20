import React from 'react'
import uuid4 from 'uuid4';
import { data } from "autoprefixer";

export const ShortNotice = () => {
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
        <div className="md:mt-10">
          <h3 className="text-1xl my-1 p-4 md:text-2xl lg:text-3xl font-bold bg-[#0095FF] leading-tight text-center text-white">
            Notice :
          </h3>
          <div className="flex flex-col justify-content-end ">
            <div className="overflow-x-auto">
              <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-0">
                <thead>
                  <tr className="bg-[#0095FF] text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Title
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedNoticeList.slice(0, 5).map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 border-b transition duration-300"
                    >
                      <td className="py-4 px-4 border-b text-sm font-medium hover:text-blue-500">
                        {item.title.slice(0, 50)}...
                      </td>
                      <td className="py-4 px-4 border-b text-sm font-small">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn bg-teal-400 text-black py-1 px-2 rounded-md">
              See All Notice List...
            </button>
          </div>
        </div>
      );
}
