"use client"

import { useState } from "react"
import { CheckCheck } from 'lucide-react';

export function ContatoForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    numero: "",
  })

  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("enviando")

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Erro ao enviar")

      const resultado = await res.json()
      console.log("Salvo no banco:", resultado)

      setForm({ nome: "", email: "", numero: "" })
      setStatus("sucesso")
    } catch (err) {
      console.error(err)
      setStatus("erro")
    }
  }

  return (
    <div className="w-full flex justify-center items-center bg-[#081c34] px-4">
      <div className="w-full max-w-2xl bg-white/10 rounded-xl p-6 shadow-lg">

        <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-white p-3 rounded text-black bg-[#ffffff40]"
                required
                />
                <input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-white p-3 rounded text-black bg-[#ffffff40]"
                required
                />
                <input
                name="numero"
                type="tel"
                placeholder="Seu telefone"
                value={form.numero}
                onChange={handleChange}
                className="w-full border border-white p-3 rounded text-black bg-[#ffffff40]"
                required
                />
            </div>

            <div className="flex justify-center">
                <button
                type="submit"
                disabled={status === "enviando"}
                className="w-full md:w-1/2 bg-[#081c34] text-white py-3 rounded hover:bg-[#0a244b] transition"
                >
                {status === "enviando" ? "Enviando..." : "Enviar"}
                </button>
            </div>

            {status === "sucesso" && (
                <p className="flex text-green-400 items-center justify-center text-center mt-2 gap-4">
                  Mensagem enviada < CheckCheck />
                </p>
            )}
            {status === "erro" && (
                <p className="text-red-400 text-center mt-2">Erro ao enviar. Tente novamente.</p>
            )}
            </form>

      </div>
    </div>
  )
}
