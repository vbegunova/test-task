import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchAllAdverts,
} from 'redux/operations';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectQuantity,
} from 'redux/selectors';
import { CatalogContainer, LoadMoreButton } from './Catalog.styled';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const quantity = useSelector(selectQuantity);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useLayoutEffect(() => {
    if (page !== 1) {
      window.scrollBy({
        top: 260 * 2,
        behavior: 'smooth',
      });
    }
  }, [page]);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = item => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <CatalogContainer>
        {adverts.map(advert => {
          return (
            <CatalogItem
              key={advert.id}
              advert={advert}
              openModal={openModal}
            />
          );
        })}
      </CatalogContainer>
      {isLoading && !error && <Loader />}
      {!isLoading && quantity !== adverts.length && (
        <LoadMoreButton onClick={handleClick}>Load more</LoadMoreButton>
      )}
      {isModalOpen && <Modal onClose={closeModal} advert={selectedItem} />}
    </>
  );
};

export default Catalog;
