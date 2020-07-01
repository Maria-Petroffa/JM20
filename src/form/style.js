import styled from 'styled-components';

export const Form = styled.form`
    width: 500px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
`;
export const FormItem = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: flex-end;
margin-top: 10px;
`;
export const Label = styled.label`
margin-right: 10px;
padding-top: 7px;
font-weight: 600;
`;

export const ErrorMessage = styled.div`
color: red;
margin-top: 10px;
margin-bottom: 10px;
align-self: center;

font-weight: 600;
`;
