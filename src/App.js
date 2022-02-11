import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreets } from './redux/reducers/streetReducer';
import StreetSelect from './components/StreetSelect/StreetSelect';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const { houses } = useSelector((state) => ({
    houses: state.houseReducer.houses,
  }));
  const { isLoading } = useSelector((state) => ({
    isLoading: state.commonReducer.isLoading,
  }));
  console.log('houses', houses);
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
