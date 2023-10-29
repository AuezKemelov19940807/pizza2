import Image from 'next/image'

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* image */}
        <div>
          <Image
            src={
              'https://flomaster.top/uploads/posts/2022-07/1657377204_3-flomaster-club-p-astronom-risunok-krasivo-4.png'
            }
            width={400}
            height={300}
            alt=""
          />
        </div>
        {/* title */}
        <div className="text-red-400 uppercase text-2xl font-bold mb-2">
          Ничего не найдено!
        </div>
        {/* text */}
        <div className="text-gray-400">
          <p>Ого, ну и запросики у вас!</p>
          <p>Ну нечего, повезет в любви</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
