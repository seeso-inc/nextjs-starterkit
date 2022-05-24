import styled from 'styled-components';

const NotiBar = styled.div`
  position: fixed;
  top: 0;
  background: #e0fe52;
  text-align: center;
  height: 54px;
  width: 100vw;
  z-index: 50;

  & > a {
    display: block;
    padding: 16px 24px;
    text-decoration: none;
    color: #0d1240;
  }

  & > a > p {
    font-weight: bold;
    font-size: 16px;
  }

  @media (max-width: 786px) {
    height: 48px;

    & > a > p {
      font-size: 12px;
    }
  }
`;

interface Props {
  text: string;
}

export default ({ text }: Props) => {
  return (
    <NotiBar className="top-bnr">
      <a>
        <p>{text}</p>
      </a>
    </NotiBar>
  );
}
