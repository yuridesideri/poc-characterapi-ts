export interface Character {
    id?: number,
    name: string,
    race: string,
    description: string,
    age: number,
    height: number,
    u_obj: string,
    sex: "male"|"female"|"other",
    image?: string,
}
