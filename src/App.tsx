import Card from "./components/card"
import Button from "./components/button"
import { SolarProvider } from '@solar-icons/react'
import { HomeIcon, LoginIcon } from '@solar-icons/react/linear'

export default function App() {
  
  return (
      <main className= "p-4">
        <div className="bg-purple-300">
            <h1 className= "text-4x1 font-bold text-purple-700 text-center">
            Título da página
            </h1>
          </div>
        <Card>
          <div>
            <SolarProvider size={24} color="currentColor" strokeWidth={1.5}>
            <HomeIcon />
            </SolarProvider>
          </div>
          <div className= "p-4 bg-stone-300 rounded-md"></div>
          <div className= "p-6 bg-stone-300 rounded-md"></div>
          <div className= "p-8 bg-stone-300 rounded-md"></div>
          <div className= "flex flex-col gap-2">
            <Button variant="success">Click Here</Button>
            <Button variant="warning">Click Here</Button>
            <Button variant="info">Click Here</Button>
            <Button variant="danger">Click Here</Button>
            <Button variant="normal">Click Here</Button>
          </div>
         </Card>
         
      </main>
  )
}

