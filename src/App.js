import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchStreets } from './redux/reducers/addressReducer';

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

  return <div className="App">Learn React</div>;
};

export default App;
