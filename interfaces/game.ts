export interface Year {
  gryffondor: string,
  serdaigle: string,
  poufsouffle: string
  serpentard: string
}

export interface Game {
  id:number
  name: string
  description: string
  years: {
    year1: Year
    year2: Year
    year3: Year
    year4: Year
    year5: Year
    year6: Year
    year7: Year
  }
}
