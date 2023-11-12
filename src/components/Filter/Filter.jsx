import { useState } from 'react';
import Select from 'react-select';
import makeOptions from '../../makes.json';
import { customStyles } from './customStyles';
import { FilterContainer, ButtonSearch } from './Filter.styled';

const Filter = ({ setFilterBrand, setStopper }) => {
  const [filterMake, setFilterMake] = useState('');

  const makeList = makeOptions.map(option => ({
    value: option,
    label: option || 'All',
  }));

  const handleChange = selectedOption => {
    setFilterMake(selectedOption);
  };

  const handleClick = () => {
    setStopper(true);
    setFilterBrand(filterMake.value);
  };

  return (
    <FilterContainer>
      <Select
        styles={customStyles}
        value={filterMake}
        onChange={handleChange}
        options={makeList}
        placeholder="Enter the text"
      />
      <ButtonSearch type="button" onClick={handleClick}>
        Search
      </ButtonSearch>
    </FilterContainer>
  );
};

export default Filter;
