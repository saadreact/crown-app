import styled from "styled-components";
import { CustomButtonContainer } from "../customButton/CustomButton.styles";

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  width: ${({ collectionwidth }) => (collectionwidth ? "22%" : "")};

  &:hover ${CollectionImage} {
    opacity: 0.8;
  }
  &:hover ${CustomButtonContainer} {
    opacity: 0.85;
    display: flex;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
