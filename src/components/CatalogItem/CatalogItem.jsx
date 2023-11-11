import {
  CardDetails,
  CardTitleContainer,
  CardTitleModel,
  LearnMoreButton,
  Image,
  Item,
} from './CatalogItem.styled';

const CatalogItem = ({ advert, openModal }) => {
  const cutFunc = (string, type = 'string') => {
    const stringArr = string.split(' ');
    if (stringArr[2] === 'and') {
      return stringArr.slice(0, 2).join(' ') + '...';
    }
    if (type === 'model') {
      return stringArr.slice(0, 2).join(' ');
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

  return (
    <Item>
      <Image src={photoLink} alt={make} />
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
