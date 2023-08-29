import { User } from '@domain/entities/User'

type ConstructorParams = {
    id: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    picture: string
}

export class UserModel {
    public id: string
    public firstName: string
    public middleName?: string
    public lastName: string
    public picture: string

    constructor({
        id,
        firstName,
        middleName,
        lastName,
        picture
    }: ConstructorParams) {
        this.id = id
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.picture = picture
    }

    static fromJson(data: any): UserModel {
        const { id, firstName, middleName, lastName, picture } = data

        return new UserModel({ id, firstName, middleName, lastName, picture })
    }

    toDomain(): User {
        const { id, firstName, middleName, lastName, picture } = this

        return new User({ id, firstName, middleName, lastName, picture })
    }
}