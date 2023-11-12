import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from 'redux/selectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import CatalogList from 'components/CatalogList/CatalogList';

const Favorites = () => {
  const favoriteAdverts = useSelector(selectFavoritesAdverts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setIsModalOpen(true);
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {favoriteAdverts[0] ? (
        <CatalogList adverts={favoriteAdverts} openModal={openModal} />
      ) : (
        <p>There are no favorites</p>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalContent advert={selectedItem} />
        </Modal>
      )}
    </>
  );
};

export default Favorites;
