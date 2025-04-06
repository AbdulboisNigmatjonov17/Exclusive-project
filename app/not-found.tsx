import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Sahifa topilmadi</h1>
      <p className="text-lg mb-6">Kechirasiz, so&apos;ralgan sahifa mavjud emas</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}