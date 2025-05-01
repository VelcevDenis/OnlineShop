// utils/profileFieldMapper.js

export const fieldMap = {
    inputFirstName: 'first_name',
    inputLastName: 'last_name',
    inputCallingCode: 'callingCode',
    inputPhone: 'phone',
    inputCountry: 'country',
    inputCity: 'city',
    inputPostalCode: 'postalCode',
    inputAddressLine: 'addressLine',
    inputDateOfBirth: 'dateOfBirth',
  };
  
  export const mapFieldChange = (e, setUserData) => {
    const { id, value } = e.target;
    const field = fieldMap[id];
    if (field) {
      setUserData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };
  