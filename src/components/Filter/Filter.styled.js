import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  display: block;
  font-family: ${p => p.theme.fonts.regular};
  width: 100%;
  max-width: 800px;
  border-radius: ${p => p.theme.radii.normal};
  border: transparent;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  margin: ${p => p.theme.space[0]}px auto;
  margin-top: 15px;

  :active {
    transition: 0.3s all;
    top: 2px;
  }
`;
