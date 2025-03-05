// import logo from "@/assets/blue-logo.svg"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

type WidgetCardProps = {
  p?: number;
}

const WidgetCard = ({...props} : WidgetCardProps) => {
  return (
    <Card {...props} className='max-w-md'>
      <CardHeader>
        <CardTitle>Widget</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </CardContent>
    </Card>
    // <Card shadow="sm" padding={props.p} radius="md" withBorder>
    //   <Card.Section p={props.p}>
    //     <Image
    //       height={200}
    //       width={200}
    //       alt="Widget"
    //       src={logo}
    //       radius="md"
    //       bd="1px solid hsl(40, 95%, 70%)"
    //       p={4}
    //     />
    //   </Card.Section>
    //   <Card.Section p={props.p}>
    //     <Text size="lg">Widget</Text>
    //     <Text size="sm" c="dimmed">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </Text>
    //   </Card.Section>
    // </Card>
  )
}

export default WidgetCard;