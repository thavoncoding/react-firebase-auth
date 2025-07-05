import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "./components/pages";


function App(){
    return <div className="container p-5">
        <h1>Welcome To React Firebase Auth</h1>
        <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/*" element={<div>Not Found Page</div>}></Route>
        </Routes>
    </div>
    
}

export default App;