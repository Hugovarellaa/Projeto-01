import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  margin-top: 4rem;
  border-spacing: 0 0.5rem;

  th {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    color: var(--text-body);
    text-align: left;
  }

  td {
    background: var(--shape);
    padding: 2rem 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-body);
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;

    &.deposit {
      color: var(--red);
    }

    &.withdraw {
      color: var(--green);
    }

    &:first-child {
      color: var(--text-title);
    }
  }
`;
