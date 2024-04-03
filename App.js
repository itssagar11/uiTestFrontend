import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./shared/Menu";
import { NewCustomer } from "./screens/NewCustomer";
import { Deposit } from "./screens/Deposit";
import { Withdrawal } from "./screens/Withdrawal";
import { ChequeDeposit } from "./screens/ChequeDeposit";
import { BalanceEnquiry } from "./screens/BalanceEnquiry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<NewCustomer/>} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/cheque" element={<ChequeDeposit />} />
          <Route path="/balance" element={<BalanceEnquiry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
