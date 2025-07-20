import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Vans, { loader as vansLoader } from './Components/Pages/Vans'
import VansDetail, { loader as vanDetailLoader} from './Components/Pages/VansDetail'
import Layout from './Components/Layout'
import HostLayout from './Components/HostLayout'
import Dashboard, { loader as dashboardLoader} from './Components/Pages/Host/Dashboard'
import Income from './Components/Pages/Host/Income'
import HostVans, { loader as hostVansLoader} from './Components/Pages/Host/HostVans'
import Reviews from './Components/Pages/Host/Reviews'
import HostVansDetail, { loader as hostVanDetailLoader} from './Components/Pages/Host/HostVansDetail'
import VanDetail from './Components/Pages/Host/VanDetail'
import VanPhoto from './Components/Pages/Host/VanPhoto'
import VanPricing from './Components/Pages/Host/VanPricing'
import PageNotFound from './Components/PageNotFound'
import Error from './Components/Error'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} />
    <Route path="vans/:id" element={<VansDetail />} loader={vanDetailLoader} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={dashboardLoader} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="hostvans" element={<HostVans />} loader={hostVansLoader} />

      <Route path="hostvans/:id" element={<HostVansDetail />} loader={hostVanDetailLoader} >
        <Route index element={<VanDetail />} />
        <Route path="vanPhoto" element={<VanPhoto />} />
        <Route path="vanpricing" element={<VanPricing />} />
      </Route>
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Route>
))

const App = () => {
  return (
    <div className='max-sm:w-96 w-[550px] mx-auto my-5 h-screen'>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App