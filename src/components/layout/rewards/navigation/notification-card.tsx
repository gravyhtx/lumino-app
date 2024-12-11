import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NotificationCardProps {
  title?: string;
  description?: string;
  button?: {
    text: string;
    callback: () => void;
  };
}
export const NotificationCard: React.FC<NotificationCardProps> = ({ title, description, button }) => {
  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{ title }</CardTitle>}
        {description &&
          <CardDescription>
            { description }
          </CardDescription>}
      </CardHeader>
      { button &&
      <CardContent>
        <Button size="sm" className="w-full" onClick={button.callback}>
          { button.text }
        </Button>
      </CardContent> }
    </Card>
  )
}