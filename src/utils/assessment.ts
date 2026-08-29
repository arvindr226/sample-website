import { assessmentQuestions } from '../data/assessment'

export interface AssessmentScores { categories: Record<string, number>; overall: number }

export function calculateAssessmentScores(answers: Record<string, number>): AssessmentScores {
  const totals: Record<string, { earned: number; possible: number }> = {}
  assessmentQuestions.forEach(question => {
    totals[question.category] ??= { earned: 0, possible: 0 }
    const value = Math.max(0, Math.min(2, answers[question.id] ?? 0))
    totals[question.category].earned += value
    totals[question.category].possible += 2
  })
  const categories = Object.fromEntries(Object.entries(totals).map(([category, score]) => [category, Math.round((score.earned / score.possible) * 100)]))
  const earned = Object.values(totals).reduce((sum, score) => sum + score.earned, 0)
  const possible = Object.values(totals).reduce((sum, score) => sum + score.possible, 0)
  return { categories, overall: possible ? Math.round((earned / possible) * 100) : 0 }
}

export function readinessBand(overall: number) {
  if (overall >= 80) return { title: 'Ready to build advanced AI DevOps systems', detail: 'Focus on production evaluation, policy, verification, and a strong portfolio case study.' }
  if (overall >= 60) return { title: 'Strong transition foundation', detail: 'Close your two lowest category gaps, then build one end-to-end grounded workflow.' }
  if (overall >= 40) return { title: 'Developing AI DevOps capability', detail: 'Keep your DevOps strengths and prioritize Python, LLM fundamentals, embeddings, and RAG.' }
  return { title: 'Start with a focused bridge', detail: 'Strengthen core operations and programming, then add AI fundamentals through one small read-only project.' }
}
