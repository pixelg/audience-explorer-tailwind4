import {
  Card,
  CardContent, CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export const GroupCard = ({...props}: CardProps) => {
  return (
    <Card {...props} className='max-w-md'>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </CardContent>
    </Card>
  )
}