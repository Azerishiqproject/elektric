import type { Metadata } from 'next'
import AdminAuth from '@/components/AdminAuth'
import AdminLayoutContent from '@/components/AdminLayoutContent'

export const metadata: Metadata = {
  title: 'Admin Panel - Mervenur elektirik',
  description: 'Mervenur elektirik yönetim paneli',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuth>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuth>
  )
}