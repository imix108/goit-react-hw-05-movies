import styled from '@emotion/styled';
export const CastContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: 'center';
  }
`;

export const CastCard = styled.div`
  width: 180px;
  margin-bottom: 5px;
  border: 1px solid;
  border-radius: 15px;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  :hover {
    scale: 1.05;
  }
  @media (max-width: 600px) {
    zoom: 1.5;
   
  }
`;
export const P = styled.p`
  margin: 5px;
`;