import Image from 'next/image'

const donateLevel = [
  {
    amout: 100,
    title: '小額贊助',
    color: 'bg-green-500',
  },
  {
    amout: 500,
    title: '中額贊助',
    color: 'bg-blue-500',
  },
  {
    amout: 1000,
    title: '大額贊助',
    color: 'bg-yellow-500',
  },
  {
    amout: 5000,
    title: '超大額贊助',
    color: 'bg-red-500',
  },
  {
    amout: 10000,
    title: '超級大額贊助',
    color: 'bg-purple-500',
  },
]

export default function Home() {
  return (
    <div className="grid grid-cols-2 container gap-5">
      {donateLevel.map((item, id) => (
        <div
          key={id}
          className={`rounded-lg sm:rounded-2xl p-5 bg-gray-100 dark:bg-gray-800 last:odd:col-span-2 ${item.color}`}
        >
          <h2>{item.amout}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}
