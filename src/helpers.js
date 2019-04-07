import React, { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { func } from 'prop-types'

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
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])
  const handleResize = () => {
    const breakpoint = window.innerWidth < 1250
    breakpoint !== isMobile && setMobile(breakpoint)
  }
  return isMobile
}

export function checkVisibility(el, partial) {
  if (!el) {
    return false
  }

  const { top, right, bottom, left, width, height } = el.getBoundingClientRect()

  if (top + right + bottom + left === 0) {
    return false
  }

  const topCheck = partial ? top + height : top
  const bottomCheck = partial ? bottom - height : bottom
  const rightCheck = partial ? right - width : right
  const leftCheck = partial ? left + width : left

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  return (
    topCheck >= 0 &&
    leftCheck >= 0 &&
    bottomCheck <= windowHeight &&
    rightCheck <= windowWidth
  )
}

export function useVisibility(
  el,
  { usePartial = false, scrollableEl = window }
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScrollOrResize = () => {
      setIsVisible(checkVisibility(el, usePartial))
    }

    scrollableEl.addEventListener('scroll', handleScrollOrResize)
    window.addEventListener('resize', handleScrollOrResize)

    setIsVisible(checkVisibility(el, usePartial))

    return () => {
      scrollableEl.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
    }
  }, [el, usePartial, scrollableEl])
  console.log(isVisible)
  return isVisible
}
