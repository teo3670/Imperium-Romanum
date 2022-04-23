module.exports = [{
    name: "afk",
    $if: "v4",
    code: `$if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $if[$nickname!=]
    $changeNickname[$authorID;AFK | $nickname;User went afk]
    $else
    $changeNickname[$authorID;AFK | $username;User went afk]
    $endif
    $endif
    $endif
    $endif
    $title[1;You are now marked as AFK]
    $description[1;<@$authorID> is now AFK. \n Reason: $getUserVar[afkr]]
    $color[1;303136]
    $setUserVar[afk;true]
    $wait[1ms]
    $setUserVar[afkr;$message]
    $onlyif[$getUserVar[afk]!=true;]`
},{
    name: "$alwaysExecute",
    $if: "v4",
    code: `$if[$getUserVar[afk]==true;]
    $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $changeNickname[$authorID;$replaceText[$nickname;AFK | ;;1];User went afk]
    $endif
    $endif
    $endif
    $setUserVar[afkr;]
    $setUserVar[afk;false]
    Welcome back <@$authorID>
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getUserVar[afk;$mentioned[1]]==true]
    Hey $username[$mentioned[1]] is afk at the moment with reason: $getUserVar[afkr;$mentioned[1]]
    $endif
    $endelseif
    $endif
    $wait[1ms]
    `
}]