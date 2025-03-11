// import logo from "@/assets/blue-logo.svg"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

interface WidgetCardProps {
  title?: string;
  description?: string;
}


const WidgetCard = ({title = "Widget", description, ...props} : WidgetCardProps) => {
  return (
    <Card {...props} className='w-full h-full overflow-hidden'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description ? <p>{description}</p> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>}
      </CardContent>
    </Card>
  )
}

export default WidgetCard;