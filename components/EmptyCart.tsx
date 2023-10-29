import Image from 'next/image'

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      {/* image */}
      <div className="mb-5">
        <Image
          src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
          width={306}
          height={200}
          alt="dog"
        />
      </div>
      {/* title */}
      <div className="text-xl font-semibold mb-2">Ой, пусто!</div>
      {/* text */}
      <div className="max-w-[400px] text-center">
        Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар. Мы
        доставим ваш заказ от 3 500 тг.
      </div>
    </div>
  )
}

export default EmptyCart
