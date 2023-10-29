//components
import PizzasItem from './PizzasItem'
//next image

const PizzasItems = ({ items }: IPizzasItemsProps) => {
  return (
    <div className="grid sm:grid-cols-1 gap-y-8 sm:gap-x-4 xl:gap-x-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((pizza: IPizzaProps) => (
        <PizzasItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}

export default PizzasItems
