import styled from 'styled-components';

export const ClientSearchResultContainer = styled.li`
  list-style: none;
  border: 1px solid gray;
  border-top: none;
  width: 100%;

  :first-child {
    border-top: 1px solid gray;
  }
`;

export const ClientSearchResultButton = styled.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  padding: 8px;
  text-align: left;
`;

export const ClientMainInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ClientInfoText = styled.div`
  flex: 1 1 100%;
`;

export const ClientAvatarContainer = styled.div`
  flex: 1 1 48px;
  margin-right: 12px;
`;

export const ClientAvatar = styled.img`
  width: 48px;
  height: 48px;
`;
