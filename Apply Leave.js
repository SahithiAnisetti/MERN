import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";

export default function ApplyLeave({ leaveType, setLeaveType, days, setDays, applyLeave }) {
  return (
    <Card className="mb-4 p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Apply for Leave</h2>
        <Select onChange={(e) => setLeaveType(e.target.value)}>
          <SelectItem value="casual">Casual Leave</SelectItem>
          <SelectItem value="medical">Medical Leave</SelectItem>
        </Select>
        <Input type="number" placeholder="Days" onChange={(e) => setDays(parseInt(e.target.value))} />
        <Button onClick={applyLeave} className="mt-2">Apply</Button>
      </CardContent>
    </Card>
  );
}
