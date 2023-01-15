import { FC, Fragment, ReactNode, useEffect, useState } from 'react'
import SideBar from './SideBar'
import ChannelBar from './ChannelBar'
import ContentContainer from './ContentContainer'
import { HiSun } from 'react-icons/hi2'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState('')

  /**
   * Toggle theme
   *
   * @returns {void}
   */
  const toggleTheme = (): void => {
    if (theme) {
      setTheme(theme == 'dark' ? 'light' : 'dark')
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }
  }

  useEffect(() => {
    if (theme) {
      let element = document.querySelector('html')

      if (element) {
        element.setAttribute('data-theme', theme)
      }
    }
  }, [theme])

  return (
    <>
      <div className="flex">
        <SideBar />
        <ChannelBar />
        <ContentContainer />
      </div>
    </>
  )
}

export default BaseLayout
