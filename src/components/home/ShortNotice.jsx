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
        <div className='m-0 p-0'>
  <h3 className="text-2xl my-1 md:text-3xl lg:text-4xl font-bold text-blue-500 leading-tight text-center">
    Notice :
  </h3>
  <div>
    <div className="overflow-x-auto">
      <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">Title</th>
            <th className="py-4 px-6 text-lg text-left border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedNoticeList.slice(0, 5).map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b transition duration-300">
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
  </div>
</div>

      );
}
