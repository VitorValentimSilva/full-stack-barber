import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
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
        </section>
      </main>
    </div>
  )
}
