import { useShapeModifyCtx } from '@/app/context'
import TextOptions from './TextOptions'
import { Icon, Image, Name, Text } from '@/types/Canvas.types'
import { HtmlHTMLAttributes, PropsWithChildren, useEffect } from 'react'
import style from './index.module.scss'
import GeneralOptions from './GeneralOptions'
import ImageOptions from './ImageOptions'
import NameOptions from './NameOptions'
import IconOptions from './IconOptions'

export const LIMIT_CANVAS = 1024
export const WIDTH_LARGE = '19.5rem'
export const WIDTH_SHORT = '9.43rem'
export const HEIGHT = `2.625rem`
function OptionsContent({ children, ...props }: PropsWithChildren<HtmlHTMLAttributes<any>>) {
  return (
    <div {...props} className={style.content}>
      {children}
    </div>
  )
}
export default function Options() {
  const [shape] = useShapeModifyCtx()

  const layer = JSON.parse(JSON.stringify(shape))
  const type = (s: string) => s === shape?.type || s === ''
  return (
    <OptionsContent>
      {!shape ? <GeneralOptions /> : null}
      {type('text') ? <TextOptions shape={layer as Text} /> : null}
      {type('image') ? <ImageOptions shape={layer as Image} /> : null}
      {type('icon') ? <IconOptions shape={layer as Icon} /> : null}
      {type('name') ? <NameOptions shape={layer as Name} /> : null}
    </OptionsContent>
  )
}
