"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Phone, MessageCircle, Mail, CheckCircle, Loader2 } from "lucide-react"
import { saveContactSubmission, simulateEmailNotification } from "../../lib/contact-storage"

interface ContactFormProps {
  propertyCode?: string
  propertyName?: string
  className?: string
}

export default function ContactForm({ propertyCode, propertyName, className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionId, setSubmissionId] = useState<string>("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Salvar dados localmente
      const submission = saveContactSubmission({
        ...formData,
        propertyCode,
        propertyName,
      })

      // Simular envio de email
      await simulateEmailNotification(submission)

      setSubmissionId(submission.id)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse no imóvel ${propertyName || ""} ${propertyCode ? `(${propertyCode})` : ""}. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5511977998888?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+5511977998888", "_self")
  }

  if (isSubmitted) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
          <p className="text-muted-foreground mb-4">Recebemos sua mensagem e entraremos em contato em breve.</p>
          <p className="text-sm text-muted-foreground">
            Protocolo: <span className="font-mono">{submissionId}</span>
          </p>
          <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setIsSubmitted(false)}>
            Enviar Nova Mensagem
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          Entre em Contato
        </CardTitle>
        {propertyName && (
          <p className="text-sm text-muted-foreground">
            Interesse em: <span className="font-medium">{propertyName}</span>
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Botões de contato rápido */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button onClick={handleCall} variant="outline" className="w-full bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Ligar
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="tel"
              placeholder="Telefone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
            <Input
              placeholder="Assunto"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
            />
          </div>

          <Textarea
            placeholder="Sua mensagem..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="min-h-[100px]"
            required
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Mensagem"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
