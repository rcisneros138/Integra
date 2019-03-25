import React, { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
export function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ ref }, bounds]
}

export function useMobile() {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    window.innerWidth < 1024 && setMobile(true)
    window.addEventListener('resize', handleResize)
  })
  const handleResize = () => {
    const breakpoint = window.innerWidth < 1250
    breakpoint !== isMobile && setMobile(breakpoint)
  }
  return isMobile
}
