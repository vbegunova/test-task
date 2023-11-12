import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/operations';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectQuantity,
} from 'redux/selectors';
import { LoadMoreButton } from './Catalog.styled';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import { clearAdverts } from 'redux/advertsSlice';
import Filter from 'components/Filter/Filter';
import CatalogList from 'components/CatalogList/CatalogList';

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const quantity = useSelector(selectQuantity);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [stopper, setStopper] = useState(true);
  const [filterBrand, setFilterBrand] = useState('');

  useLayoutEffect(() => {
    if (page !== 1 && !stopper) {
      window.scrollBy({
        top: 260 * 2,
        behavior: 'smooth',
      });
    }
  });

  useEffect(() => {
    if (filterBrand) {
      setPage(1);
      clearAdverts();
    }
    dispatch(fetchAdverts({ page, filterBrand }));
  }, [dispatch, filterBrand, page]);

  useEffect(() => {
    dispatch(clearAdverts());
  }, [dispatch]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    setStopper(false);
  };

  const openModal = item => {
    setStopper(true);
    setIsModalOpen(true);
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setStopper(true);
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Filter setFilterBrand={setFilterBrand} setStopper={setStopper} />
      {<CatalogList adverts={adverts} openModal={openModal} />}
      {isLoading && !error && <Loader />}
      {!isLoading && quantity !== adverts.length && !filterBrand && (
        <LoadMoreButton onClick={handleClick}>Load more</LoadMoreButton>
      )}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalContent advert={selectedItem} />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
