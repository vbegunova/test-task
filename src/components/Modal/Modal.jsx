import { useEffect } from 'react';
import { Image, ModalContainer, Overlay } from './Modal.styled';

const Modal = ({ advert, onClose }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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

  return (
    <>
      <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
          <Image src={photoLink} alt={make} />
          <p>
            {make} {model}, {year}
          </p>
          <p>
            {city} {country} Id: {id} Year: {year} Type: {type} Fuel
            Consumption: {fuelConsumption} Engine Size: {engineSize}
          </p>
          <p>{description}</p>
          <p>Accessories and functionalities:</p>
          <p>
            {accessories.map(item => item)} {functionalities.map(item => item)}
          </p>
          <p>Rental Conditions:</p>
          <p>
            {rentalConditions} Mileage: {mileage} Rental Price: {rentalPrice}
          </p>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
