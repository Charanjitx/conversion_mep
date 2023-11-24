export type Root = Root2[]

export interface Root2 {
  logo: string
  images: Image[]
}

export interface Image {
  img_url: string
  name: string
  content: string
}
