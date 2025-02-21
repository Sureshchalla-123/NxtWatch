import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-directon: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(249, 249, 249);
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  gap: 30px;
`
export const LoginLogo = styled.img`
  width: 150px;
  height: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const InputLabel = styled.label`
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 5px;
  padding: 0px;
`
export const InputElement = styled.input`
  width: 330px;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  outline: none;
  padding: 10px;
  font-size: 14px;
  color: #475569;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  margin-top: -23px;
`
export const CheckBox = styled.input`
  margin-left: 0px;
`

export const CheckBoxLabel = styled.label`
  font-size: 12px;
  color: #475569;
  padding: 0px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 10px;
  border-width: 0px;
  border-radius: 5px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: red;
  margin-top: -25px;
`
