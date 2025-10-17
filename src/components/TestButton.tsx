import { Button } from "./ui/button";

export function TestButton() {
  return (
    <div className="p-4 space-y-2">
      <Button variant="default" size="sm">
        Default Button
      </Button>
      <Button variant="secondary" size="sm">
        Secondary Button
      </Button>
      <Button variant="destructive" size="sm">
        Destructive Button
      </Button>
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
    </div>
  );
}
