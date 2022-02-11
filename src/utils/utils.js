import { ALLOWED_CITY_ID } from '../constants';

export const getStreetsData = (data) =>
  data.reduce((res, street) => {
    if (street.cityId === ALLOWED_CITY_ID) {
      res.push({ id: street.id, name: street.name });
    }
    return res;
  }, []);
