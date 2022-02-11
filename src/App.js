import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreets } from './redux/reducers/addressReducer';
import StreetSelect from './components/StreetSelect/StreetSelect';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const { streets, isLoading } = useSelector((state) => ({
    streets: state.addressReducer.streets,
    isLoading: state.addressReducer.isLoading,
  }));
  console.log('streets', streets);
  console.log('isLoading', isLoading);

  React.useEffect(() => {
    dispatch(fetchStreets());
  }, []);

  return (
    <div className="App">
      <div className="selects">
        <StreetSelect />
      </div>
    </div>
  );
};

export default App;
