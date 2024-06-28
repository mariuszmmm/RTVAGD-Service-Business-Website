import styled from "styled-components";

export const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

export const ContactLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.border};
  height: 150px;
`;

export const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }
`;

export const ContactInfo = styled.div`
  margin-top: 30px;
`;

export const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;
