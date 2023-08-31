type ConstructorParams = {
    id: string,
    username: string,
    picture: string
}

export class PublicUser {
    private _id: string
    public username: string
    public picture: string

    constructor({
        id,
        username,
        picture
    }: ConstructorParams) {
        this._id = id
        this.username = username
        this.picture = picture
    }

    get id(): string {
        return this._id
    }

    toSerializableObject() {
        const { _id, ...rest } = this
        return { id: _id, ...rest }
    }
}