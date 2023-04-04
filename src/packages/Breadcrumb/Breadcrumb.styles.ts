import styled from "styled-components";

export const StyledBreadcrumb = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -32px;
  position: relative;
  z-index: 1;

  @media (max-width: 539px) {
    display: none;
  }
`;

export const StyledBreadcrumbGroup = styled.div`
  align-items: center;
  background-color: #fff6d3;
  border-radius: 32px;
  display: flex;
  gap: 48px;
  padding: 16px 32px;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

export const StyledBreadcrumbItem = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;
