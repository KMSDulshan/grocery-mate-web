// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderForm from "./components/CreateOrderForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>} />
        <Route path="/create-order" element={<CreateOrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
