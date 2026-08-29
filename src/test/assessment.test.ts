import { describe, expect, it } from 'vitest'
import { assessmentQuestions } from '../data/assessment'
import { calculateAssessmentScores, readinessBand } from '../utils/assessment'

describe('assessment scoring', () => {
  it('scores a complete confident assessment at 100%', () => {
    const answers = Object.fromEntries(assessmentQuestions.map(question => [question.id, 2]))
    const result = calculateAssessmentScores(answers)
    expect(result.overall).toBe(100)
    expect(Object.values(result.categories).every(score => score === 100)).toBe(true)
  })

  it('calculates category scores independently', () => {
    const answers = Object.fromEntries(assessmentQuestions.map(question => [question.id, question.category === 'Programming' ? 2 : 0]))
    const result = calculateAssessmentScores(answers)
    expect(result.categories.Programming).toBe(100)
    expect(result.categories['AI Fundamentals']).toBe(0)
    expect(result.overall).toBeGreaterThan(0)
    expect(result.overall).toBeLessThan(100)
  })

  it('returns static rule-based readiness recommendations', () => {
    expect(readinessBand(85).title).toContain('advanced')
    expect(readinessBand(45).title).toContain('Developing')
    expect(readinessBand(20).title).toContain('focused bridge')
  })
})
