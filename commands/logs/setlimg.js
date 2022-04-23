module.exports = {
  name:"setlimg",
  code:`$setServerVar[limg;$message]
$description[1;You set as \`leave\` image $image[1;$message]]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put a link!]
$color[1;303136]

`
}