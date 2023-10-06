import assets from '@trex/assets'
import Image from 'next/image'
import React from 'react'

export default function EmptyOrder() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image src={assets.TrexImages.Empty} alt='empty-orders' className="h-2/4 w-2/4" />
      <p className='text-sm font-normal text-center'>Belum ada transaksi yang tercatat. Lakukan pembelanjaan atau transaksi terlebih dahulu yuk, untuk mendapatkan keuntungan dan peningkatan performa toko Kamu.</p>
    </div>
  )
}
