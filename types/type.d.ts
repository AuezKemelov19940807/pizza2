interface IPizzaProps {
    id: string,
    imageUrl: string,
    name: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    count: number
}

interface IPizzasItemsProps {
    items: IPizzaProps[]
}

interface IPizzasItemProps {
    pizza: IPizzaProps
}

//initialState pizzas props
interface PizzaState {
    items: IPizzaProps[]
}

interface IFilterProps {
    categoryId?:number
    name?: string
    order?: string
    type?: string
    search?:string
    limit?: number
    page?: number
}


interface TypeArrItem {
    id: number
    name: string
  }

interface NewItemCartProps {
    id:string,
    imageUrl:string,
    name:string,
    type: number,
    size: number,
    price:number,
    count:number,
}

//popup type
type PopupClick = MouseEventInit & {
    path: Node[]
    composedPath: () => void
  }