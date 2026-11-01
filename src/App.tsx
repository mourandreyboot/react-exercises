import Card from "./components/card"
import Button from "./components/button"

export default function App() {
  
  return (
      <main className= "p-4">
        <Card>
          <div className= "p-4 bg-stone-300 rounded-md"></div>
          <div className= "p-6 bg-stone-300 rounded-md"></div>
          <div className= "p-8 bg-stone-300 rounded-md"></div>
          <div className= "flex flex-col gap-2">
            <Button variant="success">CLick Here</Button>
            <Button variant="warning">Click Here</Button>
            <Button variant="info">Click Here</Button>
            <Button variant="danger">Click Here</Button>
            <Button variant="normal">Click Here</Button>
          </div>
         </Card>
      </main>
  )
}

