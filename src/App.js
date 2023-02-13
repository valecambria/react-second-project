import SideBar from "./components/SideBar";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
function App(){
return(
    <div className="flex gap-10 ml-4 pt-4">
        <SideBar></SideBar>
        <div>
            <Route path="/accordion">
                <AccordionPage></AccordionPage>
            </Route>
            <Route path="/">
                <DropdownPage></DropdownPage>
            </Route>
            <Route path="/buttons">
                <ButtonPage></ButtonPage>
            </Route>
            <Route path="/modal">
                <ModalPage></ModalPage>
            </Route>
            <Route path="/table">
                <TablePage></TablePage>
            </Route>
            <Route path="/counter">
                <CounterPage initialCount={10}></CounterPage>
            </Route>
        </div>
    </div>
)
}
export default App;