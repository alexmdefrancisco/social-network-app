import { PublicUser } from './PublicUser'

type ConstructorParams = {
    id: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    picture: string
}

export class User {
    private _id: string
    public firstName: string
    public middleName?: string
    public lastName: string
    public picture: string
    public publicProfile: PublicUser

    constructor({
        id,
        firstName,
        middleName,
        lastName,
        picture
    }: ConstructorParams) {
        this._id = id
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.picture = picture
        this.publicProfile = new PublicUser({ id, name: `${firstName} ${lastName}`, username: `invite_${firstName}`, picture })
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this.firstName
    }

    get fullName(): string {
        return [this.firstName, this.middleName, this.lastName].filter(Boolean).join(' ')
    }

    toSerializableObject() {
        const { _id, ...rest } = this
        return { id: _id, ...rest, name: this.fullName, publicProfile: { ...this.publicProfile } }
    }
}

export type UserObject = ReturnType<InstanceType<typeof User>['toSerializableObject']> & Partial<{ token: string }>