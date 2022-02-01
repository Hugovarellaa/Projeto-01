import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  > div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-top: -3rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 2rem;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
    strong {
      font-size: 2rem;
      line-height: 4rem;
      font-weight: 500;
    }

    &:last-child {
      background: var(--green);
      color: var(--shape);
    }
  }
`;
