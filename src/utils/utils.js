import { ALLOWED_CITY_ID, ALLOWED_TYPE_NAME } from '../constants';

export const getStreetsData = (data) =>
  data.reduce((res, street) => {
    if (street.cityId === ALLOWED_CITY_ID) {
      res.push({ id: street.id, name: street.name });
    }
    return res;
  }, []);

export const getApartmentsData = (data) =>
  data.reduce((res, apartment) => {
    if (apartment.typeName === ALLOWED_TYPE_NAME) {
      res.push({ id: apartment.id, name: apartment.name });
    }
    return res;
  }, []);

export const searchMatches = (arr, match) => arr.filter((item) => item.name.toLowerCase().startsWith(match));
