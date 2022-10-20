import {useState} from 'react'
import {AddCategory , GifGrid} from '../src/components'

export const GitExpertApp = () => {

    const [categories, setcategories] = useState([ 'One Punch Man'])

    const onAddCategory = (newCategory) => {

      if(categories.includes(newCategory) ) return;

     setcategories([newCategory,...categories])

    }

  return (
    <>
        <h1>GitExpertApp</h1>

        <AddCategory
          onNewCategory = {onAddCategory}
        />

      {
        categories.map(( category) =>(
            <GifGrid key={category} category = {category}/>
        ))
      }
        
    </>
  )
}
