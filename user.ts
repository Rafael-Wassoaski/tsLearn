// accountInfo
type AccountInfo = {
    id: number,
    name: string,
    email?: string
}
//? deixa o campo opcional (igual ao | undefined)

const account: AccountInfo = {
    id: 123,
    name: 'Rafa',
    email: '123@123.com'
}

const accountWithoutEmail: AccountInfo = {
    id: 123,
    name: 'Rafa',
}

//charInfo
type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: '123',
    level: 100
}

//intersection (&)
//playerInfo
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    name: 'Rafa',
    email: '123@123.com',
    nickname: 'Rafa',
    id: 123,
    level: 100
}