import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent>
          <p className="text-xs text-gray-400">
            © 2025 <span className="font-bold">FSW Barber</span>. All rights
            reserved.
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
