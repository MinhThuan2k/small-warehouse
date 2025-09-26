import { OverlayLoading } from '@/components/ui/loading/OverlayLoading'
import { store } from '@/redux/store'
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const LazyApp = lazy(() => import('@/App'))

const rootElement = document.getElementById('root')
createRoot(rootElement!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-white'>
            <OverlayLoading />
          </div>
        }
      >
        <LazyApp />
      </Suspense>
    </Provider>
  </StrictMode>
)
