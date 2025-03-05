// import logo from "@/assets/blue-logo.svg"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

type WidgetCardProps = {
  p?: number;
}

const WidgetCard = ({...props} : WidgetCardProps) => {
  return (
    <Card {...props} className='w-full h-full overflow-hidden'>
      <CardHeader>
        <CardTitle>Widget</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </CardContent>
    </Card>
  )
}

export default WidgetCard;