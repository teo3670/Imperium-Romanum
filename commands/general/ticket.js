module.exports = [{
    name: "new",
    code: `$title[1;Create A Ticket]
    $color[1;BLUE]
    $description[1;Use the select menu below to open a ticket]
    $addSelectMenu[1;panel;Choose a type;1;1;no;| Partner:Open a partnership ticket:partner:no:🤝;| Complaint:Open a complaint ticket:comp:no:📛;| Recruitment: Open a ticket to apply for recruitment:recr:no:👤]
    $onlyif[$getServerVar[channel]==ticket;Ticket system is disabled run \`$getServerVar[prefix]enable-ticket\` to enable it]
    `
},{
    name: "panel",
    type: "interaction",
    prototype: "selectMenu",
    code: `$setChannelVar[channel;$authorID;$get[chan]
    $modifyChannelPerms[$guildID;$get[chan];-viewchannel]
    $modifyChannelPerms[$authorID;$get[chan];+viewchannel]
    $useChannel[$get[chan]]
    <@$authorID>
    $author[1;$userTag;$authorAvatar]
    $title[1;New Ticket]
    $color[1;ed3491]
    $description[1;Hey <@$authorID>, this is your ticket!
        Please, state down below your whole problem, provide any detail you can so the staff can help you faster. Our staff team will answer soon as possible!

        Please run \`$getServerVar[prefix]close\` when your problem has been solved or use the "close" red button below.

        Be patient till a staff check your ticket!
        🔒 **Close**
        You or the staff can use this button to close the ticket.
        ✋ **Claim**
        The staff can use this button to claim the ticket.
        Who claims the ticket will be the only one able to close it.
        > Ticket subject: $replaceText[$replaceText[%$checkCondition[$message==]%;%true%;\`Not provided\`!;1];%false%;\`$message\`;1]]
        $footer[1;$username[$clientID] ticket system;$userAvatar[$clientID]]
        $addTimestamp[1]
    $addButton[1;Close;danger;Close;no;🔒]
    $addbutton[1;Claim;primary;Claim;no;✋]
    $interactionUpdate[Created! <#$get[chan]>]
    $wait[1ms]
    $let[chan;$createChannel[$guildID;$username-$discriminator;text;yes]]
    $onlyIf[$channelExists[$getUserVar[channel]]==false;You already have a ticket it is <#$getUserVar[channel]>]
    $onlyif[$getServerVar[channel]==ticket;Ticket system is disabled run \`$getServerVar[prefix]enable-ticket\` to enable it]
    `
},{
    name: "enable-ticket",
    alises: ['enable-tick'],
    code: `Successfully enabled ticket system
    $setServerVar[channel;ticket]
    $onlyIf[$hasPerms[$guildID;$authorID;manageserver;admin]==true;You don't have \`MANAGE SERVER\` perms]
    `
},{
    name: "disable-ticket",
    alises: ['disable-tick'],
    code: `Successfully disabled ticket system
    $setServerVar[channel;]
    $onlyIf[$hasPerms[$guildID;$authorID;manageserver;admin]==true;You don't have \`MANAGE SERVER\` perms]
    `
},{
    name: "panel",
    code: `$title[1;Panel]
    $description[1;**Click a button below**
    >>> ✋ Claim the ticket as a staff
    🔒 Close the ticket]
    $color[1;BLUE]
    $addButton[1;Close;danger;Close;no;🔒]
    $addbutton[1;Claim;primary;Claim;no;✋]
    $onlyIf[$getChannelVar[channel]==;This is not a ticket channel]`
},{
    name: "close",
    code: `$deleteChannel[$channelID]
    $wait[1s]`
},{
    name: "claim",
    code: `$setChannelVar[claimed;true]
    $setChannelTopic[$channelID;This ticket has been claimed by $userTag]
    $modifyChannelPerms[$guildID;$channelID;-sendmessage]
    $modifyChannelPerms[$authorID;$channelID;+sendmessage]
    $modifyChannelPerms[$getChannelVar[channel];$channelID;+sendmessage]
    $channelSendMessage[$channelID;{newEmbed:{title:Claimed}{description:You successfully claimed the ticket}{color:GREEN}}]
    $onlyIf[$authorID!=$getChannelVar[channel];{newEmbed:{title:Claim ticket failed}{description:Hey! You can't claim your own ticket}{color:RED}}]
    $onlyIf[$getChannelVar[claimed]==false;This ticket is already claimed]
    `
},{
    name: "Claim",
    type: "interaction",
    prototype: "button",
    code: `$setChannelVar[claimed;true]
    $setChannelTopic[$channelID;This ticket has been claimed by $userTag]
    $modifyChannelPerms[$guildID;$channelID;-sendmessage]
    $modifyChannelPerms[$authorID;$channelID;+sendmessage]
    $modifyChannelPerms[$getChannelVar[channel];$channelID;+sendmessage]
    $interactionReply[;{newEmbed:{title:Claimed}{description:You successfully claimed the ticket}{color:GREEN}};;;;yes]
    $onlyIf[$authorID!=$getChannelVar[channel];{
        "content" : " ",
        "embeds" : "{newEmbed:{title:Claim ticket failed}{description:Hey! You can't claim your own ticket}{color:RED}}",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    $onlyIf[$getChannelVar[claimed]==false;{
        "content" : "This ticket is already claimed",
        "embeds" : " ",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    `
},{
    name: "Close",
    type: "interaction",
    prototype: "button",
    code: `$deleteChannel[$channelID]
    $wait[10s]
    $interactionReply[This channel will close in \`10 seconds\`]`
}]