export type OnboardingItem = {
  image: string
  title: string
  description: string
  action: string
}

export type Animal = {
  nombre: string
  edad: number
  genero: string
  estado: AnimalStateEnum
  desc_fisica: string
  desc_adicional: string
  desc_comportamiento: string
  esterilizado: number
  vacunas: number
  imagen: string
  region: string
  comuna: string
  url: string
}

export type AnimalState = {
  adopcion: string
  perdido: string
  encontrado: string
}

export enum AnimalStateEnum {
  ADOPCION = 'Adopción',
  PERDIDO = 'Perdido',
  ENCONTRADO = 'Encontrado'
}
