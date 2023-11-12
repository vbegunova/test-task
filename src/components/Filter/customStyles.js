export const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: '#F7F7FB',
    color: '#121417',
    fontSize: '18px',
    width: '224px',
    padding: '14px 18px',
    borderRadius: '14px',
    borderStyle: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#121417',
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? '#ffffff' : isFocused ? '#ffffff' : '#ffffff',
    color: isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    marginBottom: '8px',
    marginTop: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.25,

    '&:last-child': {
      marginBottom: '0',
    },
  }),

  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),

  input: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '12px',
    border: '1px solid rgba(18, 20, 23, 0.05);',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',

    backgroundColor: '#ffffff',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#121417',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#121417',
    padding: 0,

    '&:hover': {
      color: '#121417',
    },
  }),
  container: provided => ({
    ...provided,
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: base => ({
    ...base,
    margin: '14px 8px',

    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(18, 20, 23, 0.05)',
      borderRadius: '12px',
    },
    overflowY: 'auto',
  }),
};
