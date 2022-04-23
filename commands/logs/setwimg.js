module.exports = {
  name:"setwimg",
  code:`$setServerVar[wimg;$message]
$description[1;You set as \`welcome\` image $image[1;$message]]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put a link!]
$color[1;303136]

`
}