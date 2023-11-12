import { useSelector } from 'react-redux';
import { selectFavoritesAdverts } from 'redux/selectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import CatalogList from 'components/CatalogList/CatalogList';
import { NoFavorites, StyledLink } from './Favorites.styled';
import { Link } from 'react-router-dom';

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
        <NoFavorites>
          Sorry, but there are no favorites. You can add favorite car in{' '}
          <StyledLink to="/catalog">catalog</StyledLink>!
        </NoFavorites>
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
