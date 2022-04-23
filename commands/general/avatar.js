module.exports = {

  name: "avatar",

  aliases: ['av'],

  $if:"v4",

  code: `$if[$checkContains[$userAvatar[$mentioned[1;yes]];gif]==true] $author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]

  $description[1;**[GIF]($userAvatar[$mentioned[1;yes]])**] $image[1;$userAvatar[$mentioned[1;yes]]

$else 

$author[1;$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]

$description[1;

**[PNG]($replaceText[$userAvatar[$mentioned[1;yes]];webp;png]), [WEBP]($replaceText[$userAvatar[$mentioned[1;yes]];png;webp]), [JPEG]($replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];webp;jpeg];png;jpeg])**

$image[1;$userAvatar[$mentioned[1;yes]]

$endif

$color[1;303136]

`

}