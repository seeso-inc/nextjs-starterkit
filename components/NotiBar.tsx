import styled from 'styled-components';

const StyledNotiBar = styled.div`
  position: fixed;
  top: 0;
  background: #e0fe52;
  text-align: center;
  height: 54px;
  width: 100vw;
  z-index: 50;

  & > span{
    display: block;
    padding: 16px 24px;
    text-decoration: none;
    color: #0d1240;
  }

  & > span > p {
    font-weight: bold;
    font-size: 16px;
  }

  @media (max-width: 786px) {
    height: 48px;

    & > span > p {
      font-size: 12px;
    }
  }
`;

interface Props {
  text: string;
}

const NotiBar = ({ text }: Props) => (
  <StyledNotiBar className="top-bnr">
    <span>
      <p>{text}</p>
    </span>
  </StyledNotiBar>
);

export default NotiBar;
