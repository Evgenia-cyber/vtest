import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreets } from './redux/reducers/streetReducer';
import StreetSelect from './components/StreetSelect/StreetSelect';
import HouseSelect from './components/HouseSelect/HouseSelect';
import ApartmentSelect from './components/ApartmentSelect/ApartmentSelect';
import Users from './components/Users/Users';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => ({
    isLoading: state.commonReducer.isLoading,
  }));
  console.log('isLoading', isLoading);

  React.useEffect(() => {
    dispatch(fetchStreets());
  }, []);

  return (
    <div className="App">
      <div className="selects">
        <StreetSelect />
        <HouseSelect />
        <ApartmentSelect />
      </div>
      <Users />
    </div>
  );
};

export default App;
