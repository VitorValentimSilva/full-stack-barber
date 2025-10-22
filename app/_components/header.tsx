import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchItems } from "../_constantsy/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <Card>
        <CardContent className="flex flex-row items-center justify-between">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage src="" />
                </Avatar>

                <div>
                  <p className="font-bold">Vitor Valentim</p>

                  <p className="text-xs">vitorvalentin840@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                  <Button
                    className="justify-start gap-2"
                    variant="ghost"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon size={18} />
                      Inicio
                    </Link>
                  </Button>
                </SheetClose>

                <Button className="justify-start gap-2" variant="ghost">
                  <CalendarIcon size={18} />
                  Agendamentos
                </Button>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchItems.map((item) => (
                  <Button
                    key={item.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Image
                      alt={item.title}
                      src={item.imageUrl}
                      width={18}
                      height={18}
                    />

                    {item.title}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </header>
  )
}

export default Header
