import Carousel from "./components/carousel/carousel"
import List from "./components/list/list"
import MultiStep from "./components/multistep/multistep"
import Search from "./components/search/search"
import Star from "./components/star/star"
import Forms from "./components/form/form"
import DynamicForm from "./components/dynamicform/dynamicform"
import Traffic from "./components/traffic/traffic"
import {NewRef,CountRef,NameRef, TimeRef} from "./components/useref/useref"
import NewReducer from "./components/usereducer"
import NewReducer2 from "./components/reducer/reducer"
import Map from "./components/map/map"
import Sta from "./components/useState"
import ChildComponent from "./components/props/child"
import ParentComponent from "./components/props/parent"
import ParentComponent1 from "./components/useCallback/use"
import Component1 from "./components/context/userContext"

function App() {

  return (
    <>
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
      <CountRef/>
      <NameRef/>
      <TimeRef/>
      <NewReducer/>
      <NewReducer2/>
      <ParentComponent/>
      {/* <ChildComponent/> */}
      <ParentComponent1/>
      <Component1/>
    </>
  )
}

export default App
