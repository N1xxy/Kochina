import { BarChart3 } from "lucide-react";

import { QuizExperience } from "@/components/quiz-experience";
import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAppData } from "@/lib/app-data";

export default async function QuizPage() {
  const data = await getAppData();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <h1 className="mt-4 max-w-3xl text-4xl font-bold">
            Разбери кои партии са най-близо до твоите възгледи.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Разгледай 24-те твърдения и отговори на тези, които те интересуват,
            по скала от 1 до 5. След това ще получиш резултат, който показва най-приближените до теб партии.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-cyan-100">
          <CardHeader>
            <BarChart3 className="h-7 w-7 text-cyan-700" aria-hidden="true" />
            <CardTitle>Как се смята резултатът</CardTitle>
            <CardDescription>
              Сравняваме твоите отговори с позициите на всяка партия, като
              темите, които отбележиш като важни, имат по-голяма тежест.
              Въпросите без въведена партийна позиция не участват в сравнението.
            </CardDescription>
          </CardHeader>
          
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <QuizExperience data={data} />
      </section>
    </main>
  );
}
