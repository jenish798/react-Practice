import Carousel from "./components/carousel/carousel"
import List from "./components/list/list"
import MultiStep from "./components/multistep/multistep"
import Search from "./components/search/search"
import Star from "./components/star/star"
import Forms from "./components/form/form"
import DynamicForm from "./components/dynamicform/dynamicform"
import Traffic from "./components/traffic/traffic"
import NewRef from "./components/useref/useref"
import NewReducer from "./components/usereducer"
import NewReducer2 from "./components/reducer/reducer"
import Map from "./components/map/map"
import Sta from "./components/useState"
import ChildComponent from "./components/props/child"
import ParentComponent from "./components/props/parent"
import ParentComponent1 from "./components/useCallback/use"
import Component1 from "./components/context/userContext"
import { BrowserRouter as Router,Routes,Route, useParams } from "react-router-dom"
import Home from "./Home"
import UserProfile from "./UserProfile"
import Form from "./Form"
import Router_Home from "./pages/Router-Home"
import Login from "./pages/Login"
import Settings from "./pages/settings"
import Navbar from "./pages/Navbar/Navbar"
import { Provider } from "react-redux"
import store from "./app/store"
import PrivateRouter from "./pages/Navbar/privateRouter"

function UserProfileWrapper(){
  const params = useParams();
  return <UserProfile params = {params}/>
}

function App() {

  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Router_Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRouter/>}>
        <Route path="/settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </Router>

    {/* <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:userId" element={<UserProfile/>}/>
      </Routes>
    </Router> */}
    <Form/>
      <h1>Home page</h1>
      <Sta/>
      <Map/>
      <Carousel/>
      <Star/>
      <Search/>
      <MultiStep/>
      <List/>
      <Forms/>
      <DynamicForm/>
      <Traffic/>
      <NewRef/>
      <NewReducer/>
      <NewReducer2/>
      <ParentComponent/>
      <ParentComponent1/>
      <Component1/>
    </Provider>
  )
}

export default App
