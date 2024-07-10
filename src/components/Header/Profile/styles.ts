import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ProfileButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;
