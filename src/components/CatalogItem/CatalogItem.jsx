import {
  CardDetails,
  CardTitleContainer,
  CardTitleModel,
  LearnMoreButton,
  Image,
  Item,
  ButtonLike,
  ImageOverlay,
} from './CatalogItem.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteIds } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/advertsSlice';

const CatalogItem = ({ advert, openModal }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(selectFavoriteIds);
  const cutFunc = (string, type = 'string') => {
    const stringArr = string.split(' ');
    if (stringArr[2] === 'and') {
      return stringArr.slice(0, 2).join(' ') + '...';
    }
    if (type === 'model') {
      return stringArr.slice(0, 1).join(' ');
    }
    return stringArr.slice(0, 3).join(' ') + '...';
  };

  const {
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    id,
    accessories,
    address,
  } = advert;

  const city = address.split(', ')[1];
  const country = address.split(', ')[2];

  const handleToggleFavorite = advertId => {
    if (favoriteIds.includes(advertId)) {
      dispatch(removeFavorite(advertId));
    } else {
      dispatch(addFavorite(advertId));
    }
  };

  return (
    <Item>
      <Image src={photoLink} alt={make} />
      <ImageOverlay />
      <ButtonLike onClick={() => handleToggleFavorite(id)}>
        {favoriteIds.includes(advert.id) ? (
          <svg width={18} height={18} style={{ stroke: '#3470FF' }}>
            <use href={`${sprite}#icon-active`}></use>
          </svg>
        ) : (
          <svg width={18} height={18} style={{ stroke: '#ffffff' }}>
            <use href={`${sprite}#icon-normal`}></use>
          </svg>
        )}
      </ButtonLike>
      <CardTitleContainer>
        <div>
          {make} <CardTitleModel>{cutFunc(model, 'model')}</CardTitleModel>,{' '}
          {year}
        </div>
        <div>{rentalPrice}</div>
      </CardTitleContainer>
      <CardDetails>
        {city} | {country} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {cutFunc(accessories[0])}
      </CardDetails>
      <LearnMoreButton onClick={() => openModal(advert)}>
        Learn more
      </LearnMoreButton>
    </Item>
  );
};

export default CatalogItem;
