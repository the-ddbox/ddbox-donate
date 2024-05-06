/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'

export async function GET(request: Request) {
  const fontData = await fetch(new URL('@/assets/Inter-SemiBold.ttf', import.meta.url)).then((res) => res.arrayBuffer())
  const { searchParams } = new URL(request.url)

  // ?title=<title>
  const hasTitle = searchParams.has('title')
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : siteConfig.description

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col bg-[#E7EBFF] font-['Inter'] items-start justify-between relative">
        <div tw="p-30 pb-0 text-[#2B2D42] font-bold w-full text-[70px] mx-auto">{title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
