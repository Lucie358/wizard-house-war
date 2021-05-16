export interface Year {
  gryffondor: string,
  serdaigle: string,
  poufsouffle: string
  serpentard: string
}

export interface Game {
  id: any
  name: string
  description: string
  years: Year[]
}
