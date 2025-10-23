import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchItems } from "./_constantsy/search"
import { BookingItem } from "./_components/booking-item"
import Search from "./_components/search"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  })

  return (
    <div>
      <Header />

      <main className="p-5">
        <section>
          <div>
            <h2 className="text-xl font-bold">Ola, Vitor</h2>

            <p>Segunda-feira, 05 de agosto</p>
          </div>

          <div className="mt-6">
            <Search />
          </div>

          <div className="[&:: -webkit-scrollbar]:hidden mt-6 flex gap-3 overflow-x-scroll">
            {quickSearchItems.map((item) => (
              <Button key={item.title} className="gap-2" variant="secondary">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                {item.title}
              </Button>
            ))}
          </div>

          <div className="relative mt-6 h-[150px] w-full">
            <Image
              src="/banner-01.png"
              alt="Agente nos melhores com FWS Barber"
              fill
              className="w-full rounded-xl object-cover"
            />
          </div>

          <BookingItem />

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Recomendados
          </h2>

          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Populares
          </h2>

          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
