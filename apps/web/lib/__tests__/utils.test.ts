import { describe, it, expect, vi } from 'vitest'
import { formatBytes, formatDate, generateId, debounce, throttle } from '../utils'

describe('Utility Functions', () => {
  describe('formatBytes', () => {
    it('should format bytes correctly', () => {
      expect(formatBytes(0)).toBe('0 Bytes')
      expect(formatBytes(1024)).toBe('1 KB')
      expect(formatBytes(1024 * 1024)).toBe('1 MB')
      expect(formatBytes(1024 * 1024 * 1024)).toBe('1 GB')
    })

    it('should handle decimal places', () => {
      expect(formatBytes(1536, 1)).toBe('1.5 KB')
      expect(formatBytes(1536, 0)).toBe('2 KB')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2025-01-01')
      const formatted = formatDate(date)
      expect(formatted).toBe('January 1, 2025')
    })

    it('should handle string dates', () => {
      const formatted = formatDate('2025-01-01')
      expect(formatted).toBe('January 1, 2025')
    })
  })

  describe('generateId', () => {
    it('should generate id of correct length', () => {
      const id = generateId(8)
      expect(id).toHaveLength(8)
    })

    it('should generate different ids', () => {
      const id1 = generateId()
      const id2 = generateId()
      expect(id1).not.toBe(id2)
    })
  })

  describe('debounce', () => {
    it('should debounce function calls', async () => {
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      expect(fn).not.toHaveBeenCalled()

      await new Promise(resolve => setTimeout(resolve, 150))
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe('throttle', () => {
    it('should throttle function calls', async () => {
      const fn = vi.fn()
      const throttledFn = throttle(fn, 100)

      throttledFn()
      throttledFn()
      throttledFn()

      expect(fn).toHaveBeenCalledTimes(1)

      await new Promise(resolve => setTimeout(resolve, 150))
      throttledFn()
      expect(fn).toHaveBeenCalledTimes(2)
    })
  })
})