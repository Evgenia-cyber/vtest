import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreets } from './redux/reducers/streetReducer';
import StreetSelect from './components/StreetSelect/StreetSelect';

import './App.css';
import HouseSelect from './components/HouseSelect/HouseSelect';

const App = () => {
  const dispatch = useDispatch();

  const { apartments } = useSelector((state) => ({
    apartments: state.apartmentReducer.apartments,
  }));
  const { isLoading } = useSelector((state) => ({
    isLoading: state.commonReducer.isLoading,
  }));
  console.log('apartments', apartments);
  console.log('isLoading', isLoading);

  React.useEffect(() => {
    dispatch(fetchStreets());
  }, []);

  return (
    <div className="App">
      <div className="selects">
        <StreetSelect />
        <HouseSelect />
      </div>
    </div>
  );
};

export default App;
