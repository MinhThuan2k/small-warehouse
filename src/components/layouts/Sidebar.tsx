import * as React from 'react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  page: string
  setPage: (p: string) => void
}

export default function Sidebar({ page, setPage }: SidebarProps) {
  const menu = [
    { key: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { key: 'products', label: 'Sản phẩm', icon: 'Package' },
    { key: 'categories', label: 'Danh mục', icon: 'Layers' },
    { key: 'suppliers', label: 'Nhà cung cấp', icon: 'Factory' },
    { key: 'customers', label: 'Khách hàng', icon: 'Users' },
    { key: 'warehouse', label: 'Kho hàng', icon: 'Warehouse' },
    { key: 'import', label: 'Nhập kho', icon: 'Download' },
    { key: 'export', label: 'Xuất kho', icon: 'Upload' },
    { key: 'orders', label: 'Đơn hàng', icon: 'ShoppingCart' },
    { key: 'reports', label: 'Báo cáo', icon: 'PieChart' },
    { key: 'settings', label: 'Cấu hình', icon: 'Settings' }
  ]

  return (
    <aside className='w-64 bg-indigo-900 text-white flex flex-col min-h-screen shadow-lg'>
      {/* Logo */}
      <div className='flex items-center gap-2 px-6 py-5 border-b border-white/10'>
        <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold'>
          K
        </div>
        <span className='text-lg font-semibold tracking-wide'>
          KhoB2C Admin
        </span>
      </div>

      {/* Menu */}
      <nav className='flex-1 py-6 space-y-1 pl-3'>
        {menu.map((item) => {
          const Icon = (LucideIcons as any)[item.icon]
          const active = page === item.key

          return (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={cn(
                'relative flex items-center gap-3 w-full px-5 py-3 text-sm font-medium transition-all duration-300 text-left',
                active
                  ? 'bg-white text-indigo-700 font-semibold rounded-l-3xl'
                  : 'text-white/70 hover:bg-white/10 hover:text-white rounded-l-3xl'
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    'w-5 h-5',
                    active ? 'text-indigo-700' : 'text-white/70'
                  )}
                />
              )}
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className='px-4 py-3 border-t border-white/10 text-xs text-white/70'>
        © 2025 KhoB2C
      </div>
    </aside>
  )
}
