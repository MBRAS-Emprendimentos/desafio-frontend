export function slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/-+/g, "-") // Remove hífens duplicados
      .trim()
  }
  
  export function generateSlug(propertyName: string, code: string): string {
    const nameSlug = slugify(propertyName)
    const codeSlug = code.toLowerCase()
    return `${nameSlug}-${codeSlug}`
  }
  