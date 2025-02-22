import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const Logo = styled.img`
  width: 150px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #4f46e5;
  cursor: pointer;
  font-size: 14px;
  color: #4f46e5;
  padding: 10px 20px;
  border-radius: 3px;
`
