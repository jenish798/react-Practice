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

function App() {

  return (
    <>
      <h1>Home page</h1>
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
    </>
  )
}

export default App
