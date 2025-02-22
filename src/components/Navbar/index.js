import {IoMoon} from 'react-icons/io5'
import Cookies from 'js-cookie'
import {
  NavbarContainer,
  Logo,
  Container,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Navbar = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    window.location.replace('/login')
  }

  return (
    <NavbarContainer>
      <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      <Container>
        <IoMoon size={30} />
        <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </Container>
    </NavbarContainer>
  )
}

export default Navbar
