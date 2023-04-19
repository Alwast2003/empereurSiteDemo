import styled from 'styled-components';

export const ResultBlock = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(52, 54, 67, 0.2);
  border-radius: 30px;
  margin: 15px auto;
`;

export const ResultBlockHead = styled.div<{ isFlex: boolean }>`
  display: ${({ isFlex }) => (isFlex ? 'flex' : 'block')};
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c2c3c7;
  padding: 30px 30px 10px 30px;

  @media screen and (max-width: 767px) {
    padding: 20px 15px 10px 15px;
  }
`;

export const ResultBlockTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: #343643;
  margin: 0 0 15px 0;

  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
`;

export const ResultBlockBody = styled.div`
  padding: 0 0 25px;
`;

export const ResultLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 20px;
`;

export const ResultName = styled.div`
  width: 20%;
  padding-right: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #999ba1;
  float: left;

  @media screen and (max-width: 1200px) {
    width: 30%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ResultText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #343643;
  width: 80%;
  float: left;

  img {
    width: auto;
    max-width: 100%;
    margin: 10px 0 0 0;
  }

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &::before {
  }
`;

export const ResultBlockCheck = styled.div<{ isPassed: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: ${({ isPassed }) => (isPassed ? '#03b25d' : '#e53247')};
  min-height: 30px;
  margin: 0 0 10px 0;
  padding: 5px 0 5px 38px;
  background-size: auto;
  background-position: left 0;
  background-repeat: no-repeat;
  background-image: ${({ isPassed }) => (isPassed ? 'url(img/ok.svg)' : 'url(img/notok.svg)')};
`;

export const ResultBlockImage = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  &::before {
    display: block;
    position: absolute;
    top: 7px;
    left: -20px;
    background-image: url(img/download.svg);
    height: 14px;
    content: '';
    width: 14px;
  }
`;

export const DownloadAllButton = styled.button`
  background-color: #35b275;
  padding: 8px 16px;
  color: #fff;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 15px;
`;
export const PageShowBlock = styled.div`
  float: right;
  //float: none;
  margin: 10px 0 20px 0;
`;

export const TableBlock = styled.div`
  display: table;
  width: 100%;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
`;

export const TableRow = styled.div<{ isHeader: boolean }>`
  display: table-row;
  border-bottom: 1px solid #dee1e7;
  background-color: ${({ isHeader }) => (isHeader ? '#F5F7FA' : '#fff')};
`;

export const TableColumn = styled.div`
  display: table-cell;
  padding: 23px 23px;
  border-bottom: 1px solid #dee1e7;
  border: none;
  padding: 20px 20px;

  &:last-child {
    width: 100%;
    display: block;
  }

  &:nth-child(2n) {
    padding: 0 20px;
  }
`;

export const TitleColumn = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #999ba1;

  & span {
    display: inline-block;
  }

  & i {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: #8b8eac transparent transparent transparent;
    opacity: 0.87;
    display: inline-block;
    vertical-align: middle;
    margin-left: 3px;
  }
`;

export const LabelDone = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 40%;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #999ba1;
  width: 100%;
`;

export const DateLinkElement = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 58%;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-decoration: underline;
  color: #556069;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const DateElement = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 58%;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #556069;
`;

export const StatusElement = styled.div<{ status: 'done' | 'er' | 'or' }>`
  width: 100%;
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;

  color: ${({ status }) => (status === 'done' ? '#03B25D' : status === 'er' ? '#E53247' : '#E5B832')};
`;

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
