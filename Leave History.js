import { Card, CardContent } from "@/components/ui/card";

export default function LeaveHistory({ history }) {
  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Leave History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="border-b py-1">
              {entry.days} days of {entry.type} leave
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
