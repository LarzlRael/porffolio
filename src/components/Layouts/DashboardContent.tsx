import React from 'react'
import './DashboardContent.scss'
interface DashboardContentProps {
  children: React.ReactNode
}
export const DashboardContent = ({ children }: DashboardContentProps) => {
  return <div className="DashboardContent">{children}</div>
}
