import { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import Spinner from '../../components/Spinner';
import { HiOutlineX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  console.log(books);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [bookId, setBookId] = useState(null);

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    setLoading(true);
    fetch('https://e-library-z7s7.onrender.com/cart/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token]);

  const toggleModal = (initialQuantity, id) => {
    // Pass initial quantity as parameter
    setIsModalOpen(!isModalOpen);
    setQuantity(initialQuantity); // Set initial quantity to modal quantity when modal opens
    setBookId(id);
  };

  const handleRemove = (id) => {
    fetch(`https://e-library-z7s7.onrender.com/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete book');
        }
        // Remove the deleted book from the state
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  const handleConfirm = () => {
    fetch(`https://e-library-z7s7.onrender.com/cart/${bookId}/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update quantity');
        }
        return response.json();
      })
      .then((data) => {
        // Update the quantity of the book in the local state
        const updatedBooks = books.map((book) =>
          book.id === bookId ? { ...book, quantity: data.quantity } : book
        );
        setBooks(updatedBooks);
        setIsModalOpen(false);
        navigate('/profile');
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full overflow-y-auto">
          <h4 className="mb-1">Your Selected Book</h4>
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((book) => (
                <Table.Row
                  key={book.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{book.book}</Table.Cell>
                  <Table.Cell>{book.amount}</Table.Cell>
                  <Table.Cell>{book.quantity}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-4">
                      <button
                        onClick={() => toggleModal(book.quantity, book.id)}
                        className="font-medium mx-4 text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Check Out
                      </button>
                      <button
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => handleRemove(book.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {/* -----------Main Modal--------------- */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                  onClick={() => toggleModal(quantity)}
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                ></span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <button
                        onClick={() => toggleModal(quantity)}
                        type="button"
                        className="absolute top-0 right-0 mt-4 mr-4 text-2xl text-gray-500 hover:text-gray-700 "
                      >
                        <HiOutlineX />
                      </button>
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <form className="p-2">
                          <div className="mb-4">
                            <label
                              htmlFor="Quantity"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Quantity
                            </label>
                            <input
                              type="number"
                              id="quantity"
                              min="1"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={handleConfirm}
                            className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Confirm
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
