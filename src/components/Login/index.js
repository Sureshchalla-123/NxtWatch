import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  Form,
  InputContainer,
  InputLabel,
  InputElement,
  ShowPasswordContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [showSubmitError, setShowSubmitError] = useState({
    status: false,
    errorMsg: '',
  })
  const history = useHistory()

  const onSubmitSuccess = data => {
    console.log(data)
    Cookies.set('jwt_token', data.jwt_token, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  const onSubmitFailure = data => {
    console.log(data.error_msg)
    setShowSubmitError({
      status: true,
      errorMsg: data.error_msg,
    })
  }

  useEffect(() => {
    if (isSubmit) {
      const sendData = async () => {
        try {
          const url = 'https://apis.ccbp.in/login'
          const userDetails = {
            username: userName,
            password,
          }
          const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }

          const response = await fetch(url, options)
          const data = await response.json()
          if (response.ok) {
            console.log(data)
            onSubmitSuccess(data)
          } else {
            console.log(data)
            onSubmitFailure(data)
          }
        } catch (e) {
          console.log('Error : ', e)
        } finally {
          setIsSubmit(false)
        }
      }

      sendData()
    }
  }, [isSubmit])

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const onSubmitLoginForm = event => {
    event.preventDefault()
    setIsSubmit(true)
  }

  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <Form onSubmit={onSubmitLoginForm}>
          <InputContainer>
            <InputLabel htmlFor="username">USERNAME</InputLabel>
            <InputElement
              id="username"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={onChangeUserName}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="username">PASSWORD</InputLabel>
            <InputElement
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </InputContainer>
          <ShowPasswordContainer>
            <CheckBox
              type="checkbox"
              id="showpassword"
              value={showPassword}
              onChange={onChangeShowPassword}
            />
            <CheckBoxLabel htmlFor="showpassword">Show Password</CheckBoxLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError.status ? (
            <ErrorMsg>{`*${showSubmitError.errorMsg}`}</ErrorMsg>
          ) : null}
        </Form>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
