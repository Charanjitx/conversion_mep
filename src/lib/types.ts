export type Root = Root2[]

export interface Root2 {
  images: Image[]
}

export interface Image {
  img_url: string
  name: string
  content: string
}

export interface obj {
    lbl : string
    url : string
}
