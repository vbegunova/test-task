import CatalogItem from 'components/CatalogItem/CatalogItem';
import { CatalogContainer } from './CatalogList.styled';

const CatalogList = ({ adverts, openModal }) => {
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
    </>
  );
};

export default CatalogList;
