import { Global, css } from "@emotion/react";

const estilos = css`
  * {
    font-family: "Montserrat", sans-serif;
  }
`;

export const Estilos = () => {
  return (
    <div>
      <Global styles={estilos} />
    </div>
  );
};
