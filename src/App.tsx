// import { useState } from 'react'
import { useState } from 'react'
import { CategoryPills } from './components/CategoryPills'
import { categories } from './data/home'
import PageHeader from './layouts/PageHeader'
import VideoGridItem from './components/VideoGridItem'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  

  return (
    <>
      <div className='max-h-screen flex flex-col'>
        <PageHeader/>
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
          <div>sidebar</div>
          <div className='overflow-x-hidden px-8 pb-4'>
          <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}/>
          </div>
          
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
                  <VideoGridItem />

              </div>

          </div>

          
          </div>  
      </div>
    </>
  )
}

export default App
