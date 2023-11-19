import React from 'react';
import { useSelector } from 'react-redux';
import DealBox from './DealBox';
import RightBoxTop from './RightBoxTop';
import RightBoxDown from './RightBoxDown';
import styles from './Deals.module.scss';
import { Container } from 'react-bootstrap';

const Deals = () => {
  const dealsData = useSelector(state => state.promotions);
  return (
    <Container>
      <div className={`container ${styles.dealsContainer}`}>
        <div className='row'>
          <div className='col-md-6'>
            <DealBox {...dealsData[0]} />
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <RightBoxTop {...dealsData[1]} />
              <RightBoxDown {...dealsData[2]} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Deals;
