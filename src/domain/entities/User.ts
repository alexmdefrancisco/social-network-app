import { PublicUser } from './PublicUser'

type ConstructorParams = {
    id: string,
    firstName: string,
    lastName: string,
    picture: string
}

export class User {
    private _id: string
    public firstName: string
    public lastName: string
    public picture: string
    public publicProfile: PublicUser

    constructor({
        id,
        firstName,
        lastName,
        picture
    }: ConstructorParams) {
        this._id = id
        this.firstName = firstName
        this.lastName = lastName
        this.picture = picture
        this.publicProfile = new PublicUser({ id, username: `${firstName} ${lastName}`, picture })
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this.firstName
    }

    get fullName(): string {
        return [this.firstName, this.lastName].filter(Boolean).join(' ')
    }

    toSerializableObject() {
        const { _id, ...rest } = this
        return { id: _id, ...rest, publicProfile: this.publicProfile.toSerializableObject() }
    }
}

export type UserObject = ReturnType<InstanceType<typeof User>['toSerializableObject']>