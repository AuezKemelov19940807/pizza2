import Categories from './Categories'
import Sort from './Sort'

const ContentTop = () => {
  return (
    <div className="container mx-auto px-2 xl:px-16">
      <div className="py-10 flex gap-y-8 gap-x-5  flex-wrap items-center xl:justify-between mb-10">
        <Categories />
        <Sort />
      </div>
    </div>
  )
}

export default ContentTop
