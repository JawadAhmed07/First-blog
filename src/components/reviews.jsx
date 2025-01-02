"use client"
import { useState } from "react";


const Reviews = () => {
   const reviews =  [
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472209876_122180156066308513_7475261981558816510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7yEvqL9p54gQ7kNvgFsezCp&_nc_oc=Adj8dRbmd1Ro3D94JSXzDnzMkPyPOBzkGSp92ESTdOHOa1qWjA-2URXOUCHck_CWOdI&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AqXUdjR-VgDMBoxnjT7MceV&oh=00_AYAOjZnj9WYUwF6ZipCMZgJKWF8nlBo2b4ASEIhTznqhoQ&oe=677C54FC",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/471846469_122180153846308513_687428245459374408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l6_Djhj-Kv4Q7kNvgGKRqcc&_nc_oc=AdhQDzpx92Htcm99pyMkB7Yj-Qyy6VBhje3jX-pyqklG1Zfgf6z89dPd5dyWKeBUReA&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=ArXcrKfVRI6pcZlHyHj1zHO&oh=00_AYCg79fC_u8OqxV2xnigkS1xWX0VXn95v5Ix60Na6wBDIw&oe=677C40A9",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472126979_122180156132308513_1434662673738219562_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3_-v2iOru-sQ7kNvgH-JPP_&_nc_oc=Adg2sFwZQTEWbGD9g2I6kkEIwOe6Fnw3s-lQ4tMG0horQ01J4RzxotjLLd0k9tBpgYA&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AWAUTJVUarA3ksJ5oeJrREc&oh=00_AYD0lJD4Hh49sLTc6ZDeHIBl95cqnCfYsto1JhuRiR3xCg&oe=677C6860",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472210919_122180153852308513_5194165304670229102_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-S6fvEyrfhIQ7kNvgGp1ifX&_nc_oc=Adgkg6t8gULrFikLLWu0h9fGkN9okeKfs85V9lj5CuuMGHSSsYW6WbVRBWc4jC7198c&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AWeB0lJHi9xvkLL6qIuYLi6&oh=00_AYCb8HtGsoLK95z33eR8HrWSvJF_d4zZ9h0YczM3UhPfJQ&oe=677C3CE8",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472129395_122180156006308513_5753903354617081226_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u8z5yRTTztwQ7kNvgGun6pI&_nc_oc=Adi2K1T7HbudbLxHJX9DbR-K1fr_OHhkHwVQWyNXLFr2ZFwLv3EDtsg1v9Ot5L8-vcM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AndJjB8pJPIsYNbDqyHnCYv&oh=00_AYCxEaZOjN5ksKKiDEoZpqmbClsZ05m4qkCV5hkbokGJkw&oe=677C703F",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472209876_122180156066308513_7475261981558816510_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7yEvqL9p54gQ7kNvgFsezCp&_nc_oc=Adj8dRbmd1Ro3D94JSXzDnzMkPyPOBzkGSp92ESTdOHOa1qWjA-2URXOUCHck_CWOdI&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AqXUdjR-VgDMBoxnjT7MceV&oh=00_AYAOjZnj9WYUwF6ZipCMZgJKWF8nlBo2b4ASEIhTznqhoQ&oe=677C54FC",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/471846469_122180153846308513_687428245459374408_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=l6_Djhj-Kv4Q7kNvgGKRqcc&_nc_oc=AdhQDzpx92Htcm99pyMkB7Yj-Qyy6VBhje3jX-pyqklG1Zfgf6z89dPd5dyWKeBUReA&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=ArXcrKfVRI6pcZlHyHj1zHO&oh=00_AYCg79fC_u8OqxV2xnigkS1xWX0VXn95v5Ix60Na6wBDIw&oe=677C40A9",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472126979_122180156132308513_1434662673738219562_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3_-v2iOru-sQ7kNvgH-JPP_&_nc_oc=Adg2sFwZQTEWbGD9g2I6kkEIwOe6Fnw3s-lQ4tMG0horQ01J4RzxotjLLd0k9tBpgYA&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AWAUTJVUarA3ksJ5oeJrREc&oh=00_AYD0lJD4Hh49sLTc6ZDeHIBl95cqnCfYsto1JhuRiR3xCg&oe=677C6860",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472210919_122180153852308513_5194165304670229102_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-S6fvEyrfhIQ7kNvgGp1ifX&_nc_oc=Adgkg6t8gULrFikLLWu0h9fGkN9okeKfs85V9lj5CuuMGHSSsYW6WbVRBWc4jC7198c&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AWeB0lJHi9xvkLL6qIuYLi6&oh=00_AYCb8HtGsoLK95z33eR8HrWSvJF_d4zZ9h0YczM3UhPfJQ&oe=677C3CE8",
      "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/472129395_122180156006308513_5753903354617081226_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u8z5yRTTztwQ7kNvgGun6pI&_nc_oc=Adi2K1T7HbudbLxHJX9DbR-K1fr_OHhkHwVQWyNXLFr2ZFwLv3EDtsg1v9Ot5L8-vcM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AndJjB8pJPIsYNbDqyHnCYv&oh=00_AYCxEaZOjN5ksKKiDEoZpqmbClsZ05m4qkCV5hkbokGJkw&oe=677C703F",
      
   ]

  const itemsPerSlide = 4; // Number of reviews visible per slide
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor(reviews.length / itemsPerSlide) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.floor(reviews.length / itemsPerSlide) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
        <div className="relative">
          {/* Reviews */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/4 px-4"
                style={{ flexBasis: `${100 / itemsPerSlide}%` }}
              >
                <img
                  src={review}
                  alt={`Review ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          ▶
        </button>
      </div>
    </div>
  </section>
);
};

export default Reviews;
