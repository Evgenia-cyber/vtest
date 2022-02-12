import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreets } from './redux/reducers/streetReducer';
import StreetSelect from './components/StreetSelect/StreetSelect';

import './App.css';
import HouseSelect from './components/HouseSelect/HouseSelect';
import ApartmentSelect from './components/ApartmentSelect/ApartmentSelect';

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => ({
    users: state.userReducer.users,
  }));
  const { isLoading } = useSelector((state) => ({
    isLoading: state.commonReducer.isLoading,
  }));
  console.log('users', users);
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
    </div>
  );
};

export default App;
