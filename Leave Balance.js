import { Card, CardContent } from "@/components/ui/card";

export default function LeaveBalance({ leaveBalance }) {
  return (
    <Card className="mb-4 p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Leave Balance</h2>
        <p>Casual Leave: {leaveBalance.casual} days</p>
        <p>Medical Leave: {leaveBalance.medical} days</p>
      </CardContent>
    </Card>
  );
}
