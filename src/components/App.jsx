import React from 'react';
import ChosenItem from './ChosenItem/ChosenItem';
import { products } from 'data/data';
import OptionSection from './OptionSection/OptionSection';
import styled from 'styled-components';

export const App = () => {
  return (
    <BodyWrapper>
      <ChosenItem products={products} />
      <OptionSection />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style:none;
  }
  section {
    width: 45%;
    border: 1px solid black;
    padding: 15px;
  }
`;
