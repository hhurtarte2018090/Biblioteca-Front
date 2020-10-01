import { Type } from './type.enum'

export interface BookModel {
    _id?: {},
    type: Type,
    author: string,
    title: string,
    edition?: string,
    codeWords?: string,
    description?: string,
    topics?: string,
    currentFrequency?: string,
    prints?:number,
    copies: number,
    availables: number
}
