import { useState } from "react";
import LeaveBalance from "./LeaveBalance";
import ApplyLeave from "./ApplyLeave";
import LeaveHistory from "./LeaveHistory";

export default function LeaveManagement() {
  const [leaveBalance, setLeaveBalance] = useState({ casual: 10, medical: 5 });
  const [leaveType, setLeaveType] = useState("casual");
  const [days, setDays] = useState(0);
  const [history, setHistory] = useState([]);

  const applyLeave = () => {
    if (days <= 0 || days > leaveBalance[leaveType]) {
      alert("Invalid leave request");
      return;
    }

    setLeaveBalance((prev) => ({
      ...prev,
      [leaveType]: prev[leaveType] - days,
    }));

    setHistory([...history, { type: leaveType, days }]);
    alert("Leave applied successfully");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <LeaveBalance leaveBalance={leaveBalance} />
      <ApplyLeave leaveType={leaveType} setLeaveType={setLeaveType} days={days} setDays={setDays} applyLeave={applyLeave} />
      <LeaveHistory history={history} />
    </div>
  );
}
