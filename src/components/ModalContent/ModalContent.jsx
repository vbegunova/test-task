import {
  Image,
  ModalCardDescription,
  ModalCardDetails,
  ModalCardSubtitle,
  ModalCardTitle,
  ModalCardTitleAccent,
  Condition,
  ConditionalsContainer,
  ButtonRent,
} from './ModalContent.styled';

const ModalContent = ({ advert }) => {
  const {
    photoLink,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = advert;

  const city = address?.split(', ')[1];
  const country = address?.split(', ')[2];
  const conditionals = rentalConditions.split('\n');

  const formattedMileage = mileage.toLocaleString('en-US');

  return (
    <>
      <Image src={photoLink} alt={make} />
      <ModalCardTitle>
        {make} <ModalCardTitleAccent>{model}</ModalCardTitleAccent>, {year}
      </ModalCardTitle>
      <div>
        <ModalCardDetails>
          {city} | {country} | Id: {id} | Year: {year} | Type: {type}
        </ModalCardDetails>
        <ModalCardDetails>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </ModalCardDetails>
      </div>
      <ModalCardDescription>{description}</ModalCardDescription>
      <ModalCardSubtitle>Accessories and functionalities:</ModalCardSubtitle>
      <div>
        <ModalCardDetails>
          {accessories.map(item => item).join(' | ')}
        </ModalCardDetails>
        <ModalCardDetails>
          {functionalities.map(item => item).join(' | ')}
        </ModalCardDetails>
      </div>
      <ModalCardSubtitle>Rental Conditions:</ModalCardSubtitle>
      <ConditionalsContainer>
        {conditionals.map((condition, index) => (
          <Condition key={condition}>
            {index === 0 ? (
              <p>
                {condition.replace(/(\d+)/, '')}
                <ModalCardTitleAccent>
                  {condition.match(/(\d+)/)[0]}
                </ModalCardTitleAccent>
              </p>
            ) : (
              <p>{condition}</p>
            )}
          </Condition>
        ))}{' '}
        <Condition>
          Mileage:{' '}
          <ModalCardTitleAccent>{formattedMileage}</ModalCardTitleAccent>
        </Condition>
        <Condition>
          Price: <ModalCardTitleAccent>{rentalPrice}</ModalCardTitleAccent>
        </Condition>
      </ConditionalsContainer>
      <ButtonRent href="tel:+380730000000">Rental car</ButtonRent>
    </>
  );
};

export default ModalContent;
