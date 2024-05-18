import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Reviews = () => {
  const reviews = [
    {
      rid: 1,
      name: "Towhid",
      review:
        "TLorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, velit nec imperdiet tempus, arcu elit dapibus felis, sit amet interdum velit purus eget eros. Maecenas porta bibendum elit a ultrices. In finibus diam id risus dignissim, in elementum felis iaculis. Sed malesuada erat eget augue pulvinar luctus. Praesent viverra.",
      image:
        "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
    },
    {
      rid: 2,
      name: "Towhid 2",
      review:
        "TLorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, velit nec imperdiet tempus, arcu elit dapibus felis, sit amet interdum velit purus eget eros. Maecenas porta bibendum elit a ultrices. In finibus diam id risus dignissim, in elementum felis iaculis. Sed malesuada erat eget augue pulvinar luctus. Praesent viverra.",
      image:
        "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
    },
    {
      rid: 3,
      name: "Towhid 3",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, velit nec imperdiet tempus, arcu elit dapibus felis, sit amet interdum velit purus eget eros. Maecenas porta bibendum elit a ultrices. In finibus diam id risus dignissim, in elementum felis iaculis. Sed malesuada erat eget augue pulvinar luctus. Praesent viverra.",
      image:
        "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
    },
    {
      rid: 4,
      name: "Towhid 4",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, velit nec imperdiet tempus, arcu elit dapibus felis, sit amet interdum velit purus eget eros. Maecenas porta bibendum elit a ultrices. In finibus diam id risus dignissim, in elementum felis iaculis. Sed malesuada erat eget augue pulvinar luctus. Praesent viverra.",
      image:
        "https://www.topmediai.com/micro/passport-photo-maker/assets/pic1-d977d0d5.png",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentReviewIndex, reviews.length]);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="reviews-slider bg-teal-300 p-8 rounded-md shadow-md my-10">
      <div className="hidden lg:flex items-center justify-between mb-4">
        <button onClick={prevReview} className="focus:outline-none">
          <FaChevronLeft />
        </button>
        <div className="review flex items-center">
          <img
            src={reviews[currentReviewIndex].image}
            alt=""
            className="h-20 mr-4"
          />
          <div>
            <p className="font-semibold text-blue-500">
              {reviews[currentReviewIndex].name}
            </p>
            <p>{reviews[currentReviewIndex].review}</p>
          </div>
        </div>
        <button onClick={nextReview} className="focus:outline-none">
          <FaChevronRight />
        </button>
      </div>

      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-center">
          <button onClick={prevReview} className="focus:outline-none mb-2">
            <FaChevronLeft />
          </button>
          <div className="review flex items-center">
            <img
              src={reviews[currentReviewIndex].image}
              alt=""
              className="h-20 mr-4"
            />
            <div>
              <p className="font-semibold">
                {reviews[currentReviewIndex].name}
              </p>
              <p>{reviews[currentReviewIndex].review}</p>
            </div>
          </div>
          <button onClick={nextReview} className="focus:outline-none mt-2">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
