import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />

      <main className="p-5">
        <section>
          <div>
            <h2 className="text-xl font-bold">Ola, Vitor</h2>

            <p>Segunda-feira, 05 de agosto</p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Buscar serviços ou barbeiros" />

            <Button>
              <SearchIcon />
            </Button>
          </div>

          <div className="relative mt-6 h-[150px] w-full">
            <Image
              src="/banner-01.png"
              alt="Agente nos melhores com FWS Barber"
              fill
              className="w-full rounded-xl object-cover"
            />
          </div>

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Agendamentos
          </h2>

          <Card className="p-0">
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>

                <h3 className="font-semibold">Corte de Cabelo</h3>

                <div className="flex items-center-safe gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png" />
                  </Avatar>

                  <p className="text-sm">Barbearia FSW</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">05</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Recomendados
          </h2>

          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
