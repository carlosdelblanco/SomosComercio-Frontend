import styled from "styled-components";

const BusinessCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
  max-width: 450px;
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) => props.theme.colors.mainItemTextColor};
  border-bottom: 1px solid black;

  .business-card__container {
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .business-card__image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    padding: 10px 0;
  }

  .business-card__businessName {
    font-size: 36px;
  }

  .business-card__slogan {
    font-size: 24px;
    line-height: 2;
  }

  .business-card__info {
    display: block;
    font-size: 18px;
  }
`;

export default BusinessCardStyled;
