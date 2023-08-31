import { User } from '@domain/entities/User'

type ConstructorParams = {
    id: string,
    firstName: string,
    lastName: string,
    picture: string
}

export class UserModel {
    public id: string
    public firstName: string
    public lastName: string
    public picture: string

    constructor({
        id,
        firstName,
        lastName,
        picture
    }: ConstructorParams) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.picture = picture
    }

    static fromJson(data: any): UserModel {
        const { id, firstName, lastName, picture } = data

        return new UserModel({ id, firstName, lastName, picture })
    }

    toDomain(): User {
        const { id, firstName, lastName, picture } = this

        return new User({ id, firstName, lastName, picture })
    }
}