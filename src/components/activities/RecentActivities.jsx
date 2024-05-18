export const RecentActivities = () => {
  const activities = [
    {
      title: "Activity 1",
      description: "This is the description of activity 1",
      date: "2023-04-01",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
    {
      title: "Activity 2",
      description: "This is the description of activity 2",
      date: "2023-04-02",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
    {
      title: "Activity 3",
      description: "This is the description of activity 3",
      date: "2023-04-03",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
    {
      title: "Activity 4",
      description: "This is the description of activity 4",
      date: "2023-04-04",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
    {
      title: "Activity 5",
      description: "This is the description of activity 5",
      date: "2023-04-05",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
    {
      title: "Activity 6",
      description: "This is the description of activity 6",
      date: "2023-04-06",
      img: "https://www.aclu.org/wp-content/uploads/2023/09/education-equity-blog.jpg",
    },
  ];

  // Extracting the last three activities
  const lastThreeActivities = activities.slice(-3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4 text-blue-500">Recent Activities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lastThreeActivities.map((activity) => (
          <div
            key={activity.title}
            className="bg-white rounded-lg overflow-hidden shadow-md bg-blue-100"
          >
            <img
              src={activity.img}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{activity.title}</h2>
              <p className="text-sm text-gray-700 mb-2">
                {activity.description.slice(0, 50)}.....
              </p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          </div>
        ))}
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          View All Activities
        </button>
      </div>
    </div>
  );
};
