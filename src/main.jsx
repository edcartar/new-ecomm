// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import ProductProvider from './context/ProductContext.jsx'

// import SideBarProvider from './context/SideBarContext.jsx'

// import CartProvider from './context/CartContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <SideBarProvider>
//     <CartProvider>
//       <ProductProvider>
//         <StrictMode>
//           <App />
//         </StrictMode>
//       </ProductProvider>
//     </CartProvider>
//   </SideBarProvider>
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import SideBarProvider from './context/SideBarContext.jsx'
import CartProvider from './context/CartContext.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SideBarProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </SideBarProvider>
    </QueryClientProvider>
  </StrictMode>
)