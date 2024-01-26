import React from 'react';
import { Title, Text, Container } from './PageNotFound.styled';

export const PageNotFound = () => {
  return (
    <Container>
      <Title>Not Found. Error 404</Title>
      <Text>The page does not exist or has been deleted</Text>
    </Container>
  );
};


