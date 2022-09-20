import {BrowserRouter, Route, Routes, useParams} from "react-router-dom"
import {initializeApp} from "firebase/app"
import {useEffect} from "react"
import {firebaseConfig} from "./config"
import {Provider} from "react-redux"
import {toggleTheme} from "./slices/darkTheme"
import styled, {ThemeProvider} from "styled-components"
import {useAppDispatch, useAppSelector} from "./hooks/useStore"
import {store} from "./store"
import Button from "@mui/material/Button"
import {darkTheme} from "./theme"

type HomeParams = {
  postId?: string
}

type DarkThemeProps = {
  darkTheme: boolean
}

const Background = styled.div<DarkThemeProps>(({darkTheme}) => ({
  backgroundColor: darkTheme ? "black" : "white",
}))

const HomeText = styled.h1<DarkThemeProps>`
  color: ${props => props.darkTheme ? "white" : "black"};
`

function Home() {
  const {postId} = useParams<HomeParams>()

  const darkTheme = useAppSelector((state) => state.darkTheme.value)
  const dispatch = useAppDispatch()

  const handleChangeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
      <Background darkTheme={darkTheme}>
        <Button variant="contained" onClick={handleChangeTheme}>Toggle theme</Button>
        <HomeText darkTheme={darkTheme}>{postId ?? "Home"}</HomeText>
      </Background>
  )
}

export default function App() {

  useEffect(() => {
    initializeApp(firebaseConfig)
  }, [])

  return (
      <Provider store={store}>
        <BrowserRouter basename="sociely">
          <ThemeProvider theme={darkTheme}>
            <Routes>
              <Route path="/" element={<Home/>}>
                <Route path=":postId" element={<Home/>}/>
              </Route>
              <Route path="login" element={<Home/>}/>
              <Route path="signup" element={<Home/>}/>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
  )
}
