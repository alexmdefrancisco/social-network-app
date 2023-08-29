import { PublicUser } from '@domain/entities/PublicUser'

type ConstructorParams = {
    id: string,
    name: string,
    username: string,
    picture: string
}

export class PublicUserModel {
    public id: string
    public name: string
    public username: string
    public picture: string

    constructor({
        id,
        name,
        username,
        picture
    }: ConstructorParams) {
        this.id = id
        this.name = name,
        this.username = username,
        this.picture = picture
    }

    static fromJson(data: any): PublicUserModel {
        const { id, name, username, picture } = data

        return new PublicUserModel({ id, name, username, picture })
    }

    toDomain(): PublicUser {
        const { id, name, username, picture } = this

        return new PublicUser({ id, name, username, picture })
    }
}