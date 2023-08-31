import { PublicUser } from '@domain/entities/PublicUser'

type ConstructorParams = {
    id: string,
    username: string,
    picture: string
}

export class PublicUserModel {
    public id: string
    public username: string
    public picture: string

    constructor({
        id,
        username,
        picture
    }: ConstructorParams) {
        this.id = id
        this.username = username,
        this.picture = picture
    }

    static fromJson(data: any): PublicUserModel {
        const { id, username, picture } = data

        return new PublicUserModel({ id, username, picture })
    }

    toDomain(): PublicUser {
        const { id, username, picture } = this

        return new PublicUser({ id, username, picture })
    }
}