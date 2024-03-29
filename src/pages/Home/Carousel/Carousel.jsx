import { Carousel } from 'flowbite-react';

const CustomCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2">
      <Carousel
      // onSlideChange={(index) => console.log('onSlideChange()', index)}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/carousel/97803086165.jpg"
            alt="slide 1"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/carousel/97803850165.jpg"
            alt="slide 2"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/carousel/97803850861.jpg"
            alt="slide 3"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/carousel/97885086165.jpg"
            alt="slide 4"
            className="w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default CustomCarousel;
