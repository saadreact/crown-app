import React from 'react'
import { useDispatch } from 'react-redux';
import Directory from '../../components/directory/Directory';
import { fetchDirCollectionStartAsync } from '../../redux/directory/directory.actions';
import { HomepageContainer } from './Homepage.styles';

const Homepage = () => {
const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchDirCollectionStartAsync())
  }, []);

  return (
    <HomepageContainer>
        <Directory />
    </HomepageContainer>
  )
}

export default Homepage