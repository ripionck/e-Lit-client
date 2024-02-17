import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PaginationX from '../../components/Pagination';

const categories = [
  'Mystery',
  'Thriller',
  'Horror',
  'Adventure',
  'Fantasy',
  'Science Fiction',
  'Historical Fiction',
];

const authors = [
  'Jane Smith',
  'John Doe',
  'Emily Johnson',
  'Michael Brown',
  'Sarah Lee',
  'David Wilson',
  'Jennifer Taylor',
  'Robert Anderson',
  'Amanda Martinez',
  'Christopher Davis',
];

const publishers = [
  'HarperCollins',
  'Penguin Random House',
  'Simon & Schuster',
  'Hachette Book Group',
  'Macmillan Publishers',
  'HarperCollins Publishers',
  'Scholastic Corporation',
  'Pearson Education',
  'Wiley',
  'Oxford University Press',
];
const items = [
  {
    title: 'The Mystery of the Lost Key',
    author: 'Jane Smith',
    publisher: 'HarperCollins',
    category: 'Mystery',
  },
  {
    title: 'Echoes of the Past',
    author: 'John Doe',
    publisher: 'Penguin Random House',
    category: 'Thriller',
  },
  {
    title: 'Whispers in the Dark',
    author: 'Emily Johnson',
    publisher: 'Simon & Schuster',
    category: 'Horror',
  },
  {
    title: 'The Secret of the Hidden Chamber',
    author: 'Michael Brown',
    publisher: 'Hachette Book Group',
    category: 'Adventure',
  },
  {
    title: 'Shadows of the Unknown',
    author: 'Sarah Lee',
    publisher: 'Macmillan Publishers',
    category: 'Fantasy',
  },
  {
    title: 'Beyond the Horizon',
    author: 'David Wilson',
    publisher: 'HarperCollins Publishers',
    category: 'Science Fiction',
  },
  {
    title: 'The Enigma of the Forbidden Scroll',
    author: 'Jennifer Taylor',
    publisher: 'Scholastic Corporation',
    category: 'Mystery',
  },
  {
    title: 'Lost in Time',
    author: 'Robert Anderson',
    publisher: 'Pearson Education',
    category: 'Historical Fiction',
  },
  {
    title: 'Echoes of Eternity',
    author: 'Amanda Martinez',
    publisher: 'Wiley',
    category: 'Fantasy',
  },
  {
    title: 'The Chronicles of Destiny',
    author: 'Christopher Davis',
    publisher: 'Oxford University Press',
    category: 'Adventure',
  },
  {
    title: 'The Hidden Path',
    author: 'Jane Smith',
    publisher: 'HarperCollins',
    category: 'Science Fiction',
  },
  {
    title: 'Shadow of Doubt',
    author: 'John Doe',
    publisher: 'Penguin Random House',
    category: 'Thriller',
  },
  {
    title: 'Forgotten Dreams',
    author: 'Emily Johnson',
    publisher: 'Simon & Schuster',
    category: 'Mystery',
  },
  {
    title: 'The Forbidden Forest',
    author: 'Michael Brown',
    publisher: 'Hachette Book Group',
    category: 'Fantasy',
  },
  {
    title: 'Echoes of Silence',
    author: 'Sarah Lee',
    publisher: 'Macmillan Publishers',
    category: 'Horror',
  },
  {
    title: 'The Lost Chronicles',
    author: 'David Wilson',
    publisher: 'HarperCollins Publishers',
    category: 'Adventure',
  },
  {
    title: 'Whispers of Fate',
    author: 'Jennifer Taylor',
    publisher: 'Scholastic Corporation',
    category: 'Fantasy',
  },
  {
    title: 'The Enchanted Mirror',
    author: 'Robert Anderson',
    publisher: 'Pearson Education',
    category: 'Mystery',
  },
  {
    title: 'The Last Voyage',
    author: 'Amanda Martinez',
    publisher: 'Wiley',
    category: 'Adventure',
  },
  {
    title: 'The Endless Odyssey',
    author: 'Christopher Davis',
    publisher: 'Oxford University Press',
    category: 'Science Fiction',
  },
];

const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedAuthor(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle author selection
  const handleAuthorSelect = (author) => {
    if (selectedAuthor === author) {
      setSelectedAuthor(null);
    } else {
      setSelectedAuthor(author);
      setSelectedCategory(null);
      setSelectedPublisher(null);
    }
  };

  // Function to handle publisher selection
  const handlePublisherSelect = (publisher) => {
    if (selectedPublisher === publisher) {
      setSelectedPublisher(null);
    } else {
      setSelectedPublisher(publisher);
      setSelectedCategory(null);
      setSelectedAuthor(null);
    }
  };

  // Function to reset all filters
  const resetFilter = () => {
    setSelectedCategory(null);
    setSelectedAuthor(null);
    setSelectedPublisher(null);
  };

  // Filter items based on selected categories, authors, and publishers
  const filteredItems = items.filter(
    (item) =>
      (selectedCategory === null || selectedCategory === item.category) &&
      (selectedAuthor === null || selectedAuthor === item.author) &&
      (selectedPublisher === null || selectedPublisher === item.publisher)
  );

  return (
    <>
      <div className="flex flex-row ml-4 mt-2">
        {/* ---------Left side--------------- */}
        <div className="flex flex-col w-1/4 p-4 overflow-y-auto">
          {/*-----------Categories---------------*/}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 rounded-lg">
            <h3 className="text-xl mb-2 border-b border-gray-300">
              Show By Categories
            </h3>
            <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto ">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => handleCategorySelect(category)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          {/*-------author---------- */}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 mt-4 rounded-lg">
            <div className="flex justify-between border-b border-gray-300 mb-2">
              <h4 className="">Filter</h4>
              <p className="cursor-pointer text-blue-500" onClick={resetFilter}>
                Reset Filter
              </p>
            </div>
            <p>Authors</p>
            {/*-----------Search bar---------------*/}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CiSearch />
              </span>
            </div>
            <div className="flex flex-col space-y-1 max-h-56 overflow-y-auto">
              {authors.map((author, index) => (
                <label
                  key={index}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="author"
                    checked={selectedAuthor === author}
                    onChange={() => handleAuthorSelect(author)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {author}
                </label>
              ))}
            </div>
          </div>
          {/* -------------publishers-------------- */}
          <div className="border bg-gray-50 border-gray-300 px-4 py-2 mt-2 rounded-lg">
            <h4 className="">Publishers</h4>
            {/*-----------Search bar---------------*/}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 pr-8 mt-3 mb-2 border rounded-full bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CiSearch />
              </span>
            </div>
            <div className="flex flex-col space-y-1 max-h-52 overflow-y-auto">
              {publishers.map((publisher, index) => (
                <label
                  key={index}
                  className="block border rounded px-2 py-0.5 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="publisher"
                    checked={selectedPublisher === publisher}
                    onChange={() => handlePublisherSelect(publisher)}
                    className="mr-2 cursor-pointer hover:bg-blue-500 h-3 w-3"
                    style={{ boxShadow: 'none' }}
                  />
                  {publisher}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------Right Side -------------*/}
        <div className="flex flex-col w-3/4 p-4 overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center bg-gray-200 rounded shadow relative"
              >
                <img
                  src="/src/assets/books/42766.png"
                  alt=""
                  className="h-52 w-48"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    // onClick={() => handleBookDetail(book.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    <span className="flex items-center gap-1">
                      Details
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </div>
                <p>{item.title}</p>
                <p>{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaginationX />
    </>
  );
};

export default BookList;
