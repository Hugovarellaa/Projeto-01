import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    padding: 0 3rem;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
