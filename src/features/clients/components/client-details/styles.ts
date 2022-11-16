import styled from 'styled-components';

export const ClientDetailsContainer = styled.div`
  margin-top: 80px;
  position: relative;
  border: 1px solid gray;
  border-radius: 12px;
  padding: 12px;
  width: 80%;
  text-align: left;

  @media (min-width: 640px) {
    width: 50%;
  }
`;

export const ClientMainInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ClientInfoText = styled.div`
  flex: 1 1 100%;

  > p {
    margin: 0;
    padding: 0;
  }
`;

export const ClientAvatarContainer = styled.div`
  flex: 1 1 128px;
  margin-right: 12px;
`;

export const ClientAvatar = styled.img`
  width: 128px;
  height: 128px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 40px;
  line-height: 40px;
  top: -40px;
  right: -40px;
`;
