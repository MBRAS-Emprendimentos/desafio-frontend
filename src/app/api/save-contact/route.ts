import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import type { ContactSubmission } from '../../../lib/contact-storage'
import { formatSubmissionToText } from '../../../lib/contact-storage'

export async function POST(request: NextRequest) {
  try {
    const submission: ContactSubmission = await request.json()
    
    // Definir o caminho do arquivo
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contacts.txt')
    
    // Criar diretório se não existir
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
    
    // Formatar os dados para texto
    const formattedData = formatSubmissionToText(submission)
    
    // Ler arquivo existente ou criar novo
    let existingContent = ''
    if (existsSync(filePath)) {
      existingContent = await readFile(filePath, 'utf-8')
    }
    
    // Adicionar novo contato ao arquivo
    const updatedContent = existingContent + '\n\n' + formattedData
    
    // Salvar arquivo atualizado
    await writeFile(filePath, updatedContent, 'utf-8')
    
    return NextResponse.json({ success: true, message: 'Contato salvo com sucesso!' })
  } catch (error) {
    console.error('Erro ao salvar contato:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao salvar contato' },
      { status: 500 }
    )
  }
}
