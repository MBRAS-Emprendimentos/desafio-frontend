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
  
    // Salvar no localStorage para funcionalidade do frontend
    const existingSubmissions = getContactSubmissions()
    const updatedSubmissions = [...existingSubmissions, newSubmission]
  
    if (typeof window !== "undefined") {
      localStorage.setItem("mbras-contact-submissions", JSON.stringify(updatedSubmissions))
    }
  
    // Salvar no arquivo estático do projeto
    saveToStaticFile(newSubmission)
  
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
  
  // Função para salvar no arquivo estático do projeto
  const saveToStaticFile = async (submission: ContactSubmission): Promise<void> => {
    try {
      // Enviar dados para API route que salvará no arquivo
      await fetch('/api/save-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      })
    } catch (error) {
      console.error('Erro ao salvar no arquivo estático:', error)
    }
  }
  
  // Formatar dados para texto
  export const formatSubmissionToText = (submission: ContactSubmission): string => {
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
  