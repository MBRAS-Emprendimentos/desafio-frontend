export interface ContactSubmission {
    id: string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    propertyCode?: string
    propertyName?: string
    timestamp: string
    status: "pending" | "contacted" | "closed"
  }
  
  // Simular armazenamento em localStorage (em produção seria um banco de dados)
  export const saveContactSubmission = (
    submission: Omit<ContactSubmission, "id" | "timestamp" | "status">,
  ): ContactSubmission => {
    const newSubmission: ContactSubmission = {
      ...submission,
      id: generateId(),
      timestamp: new Date().toISOString(),
      status: "pending",
    }
  
    // Salvar em arquivo TXT
    saveToTextFile(newSubmission)
  
    // Também salvar no localStorage para funcionalidade do frontend
    const existingSubmissions = getContactSubmissions()
    const updatedSubmissions = [...existingSubmissions, newSubmission]
  
    if (typeof window !== "undefined") {
      localStorage.setItem("mbras-contact-submissions", JSON.stringify(updatedSubmissions))
    }
  
    return newSubmission
  }
  
  export const getContactSubmissions = (): ContactSubmission[] => {
    if (typeof window === "undefined") return []
  
    const stored = localStorage.getItem("mbras-contact-submissions")
    return stored ? JSON.parse(stored) : []
  }
  
  export const updateSubmissionStatus = (id: string, status: ContactSubmission["status"]): void => {
    const submissions = getContactSubmissions()
    const updatedSubmissions = submissions.map((sub) => (sub.id === id ? { ...sub, status } : sub))
  
    if (typeof window !== "undefined") {
      localStorage.setItem("mbras-contact-submissions", JSON.stringify(updatedSubmissions))
    }
  }
  
  function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }
  
  // Função para exportar dados como JSON (simular backup)
  export const exportContactData = (): string => {
    const submissions = getContactSubmissions()
    return JSON.stringify(submissions, null, 2)
  }
  
  // Função para simular envio por email (em produção seria integração real)
  export const simulateEmailNotification = (submission: ContactSubmission): Promise<boolean> => {
    return new Promise((resolve) => {
      // Simular delay de envio
      setTimeout(() => {
        console.log("📧 Email enviado para equipe MBRAS:", {
          to: "contato@mbras.com.br",
          subject: `Novo contato: ${submission.subject}`,
          body: `
            Nome: ${submission.name}
            Email: ${submission.email}
            Telefone: ${submission.phone}
            Imóvel: ${submission.propertyName || "Não especificado"}
            Mensagem: ${submission.message}
          `,
        })
        resolve(true)
      }, 1000)
    })
  }
  
  // Função para salvar em arquivo TXT
  const saveToTextFile = (submission: ContactSubmission): void => {
    const textContent = formatSubmissionToText(submission)
  
    if (typeof window !== "undefined") {
      // Criar e baixar arquivo TXT
      const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `contato-${submission.id}-${new Date().toISOString().split("T")[0]}.txt`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }
  
  // Formatar dados para texto
  const formatSubmissionToText = (submission: ContactSubmission): string => {
    const date = new Date(submission.timestamp).toLocaleString("pt-BR")
  
    return `
  === NOVO CONTATO MBRAS ===
  Data/Hora: ${date}
  Protocolo: ${submission.id}
  
  DADOS DO CLIENTE:
  Nome: ${submission.name}
  Email: ${submission.email}
  Telefone: ${submission.phone}
  Assunto: ${submission.subject}
  
  IMÓVEL DE INTERESSE:
  ${submission.propertyName ? `Nome: ${submission.propertyName}` : "Não especificado"}
  ${submission.propertyCode ? `Código: ${submission.propertyCode}` : ""}
  
  MENSAGEM:
  ${submission.message}
  
  STATUS: ${submission.status.toUpperCase()}
  
  === FIM DO REGISTRO ===
    `.trim()
  }
  