import { Header, Card, Button } from "semantic-ui-react";
import styled from "styled-components";

const DarkModeHeader = styled(Header)`
  color: var(--textNormal);
`;

const DarkModeCard = styled(Card)`
  background-color: var(--bg) !important;
  color: var(--textNormal) !important;
  .content {
    color: var(--textNormal) !important;
  }
`;

const DarkModeButton = styled(Button)`
  color: var(--textNormal);
`;

export { DarkModeHeader, DarkModeCard, DarkModeButton };
