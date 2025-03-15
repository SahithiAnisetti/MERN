import { useState } from "react";
import Login from "./Login";
import LeaveManagement from "./LeaveManagement";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {isLoggedIn ? <LeaveManagement /> : <Login onLogin={setIsLoggedIn} />}
    </div>
  );
}

export default App;
