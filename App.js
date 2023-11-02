import React, { useState } from 'react';
import Modal from 'react-modal';
import DataDisplay from './DataDisplay';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    },
    {
      name: 'Jane Smith',
      age: 25,
      city: 'Los Angeles',
    },
    {
      name: 'Bob Johnson',
      age: 35,
      city: 'Chicago',
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Show Data</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Data Modal"
      >
        <DataDisplay data={data} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
