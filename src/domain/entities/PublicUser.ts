type ConstructorParams = {
    id: string,
    name: string,
    username: string,
    picture: string
}

export class PublicUser {
    private _id: string
    public name: string
    public username: string
    public picture: string

    constructor({
        id,
        name,
        username,
        picture
    }: ConstructorParams) {
        this._id = id
        this.name = name
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