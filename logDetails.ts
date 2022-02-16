// union
function logDetails(uid: number | string, item: string){
    console.log(`${uid} é o id de do item ${item}`);
}

logDetails(123, 'teste');
logDetails('123', 'teste');

//type alias
type UID = number | string | undefined;

function logInfo(uid: UID, user: string){
    console.log(`${uid} é o id de do user ${user}`);
}

logInfo(123, 'teste');
logInfo('123', 'teste');

type PLATFORM = 'windows' | 'linux' | 'macos';

function getPlatform(platform: PLATFORM){
    return platform;
}

getPlatform('windows');