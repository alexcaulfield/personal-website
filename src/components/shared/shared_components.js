import { Header, Card, Button, Label, Item } from "semantic-ui-react";
import styled from "styled-components";

const DarkModeHeader = styled(Header)`
  color: var(--textNormal) !important;
`;

const DarkModeCard = styled(Card)`
  background-color: var(--bg) !important;
  color: var(--textNormal) !important;
  .content {
    color: var(--textNormal) !important;
    .description {
      color: var(--textNormal) !important;
      margin-bottom: 8px;
    }
    .header {
      color: var(--textNormal) !important;
    }
    .meta {
      color: var(--textNormal) !important;
    }
  }
`;

const DarkModeButton = styled(Button)`
  color: var(--textNormal);
`;

const DarkModeLabel = styled(Label)`
  background-color: var(--bg) !important;
  color: var(--textNormal) !important;
  border-color: var(--textNormal) !important;
  margin-bottom: 8px;
`;

const DarkModeItem = styled(Item)`
  .header {
    color: var(--textNormal) !important;
  }
  .meta {
    color: var(--textNormal) !important;
  }
`;

export { DarkModeHeader, DarkModeCard, DarkModeButton, DarkModeLabel, DarkModeItem };
