import React, { ReactNode } from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './Service.module.scss'

interface Props {
  title: string
  children: ReactNode
}
const Service = ({ title, children }: Props) => {
  return (
    <div className={S.service}>
      <div>
        <AiFillTool
          color='#555'
          style={{ marginRight: '1rem', marginTop: '0.5rem' }}
        />
      </div>
      <p>
        <strong>{title}</strong> - {children}
      </p>
    </div>
  )
}

export default Service
