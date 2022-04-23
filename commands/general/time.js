module.exports = {
  name:"time",
code:`$description[1;**__Current Time:__**>
<t:$truncate[$divide[$dateStamp;1000]]:t>
<t:$truncate[$divide[$dateStamp;1000]]:T><t:$truncate[$divide[$dateStamp;1000]]:f>
<t:$truncate[$divide[$dateStamp;1000]]:F>
<t:$truncate[$divide[$dateStamp;1000]]:d>
<t:$truncate[$divide[$dateStamp;1000]]:D>
<t:$truncate[$divide[$dateStamp;1000]]:R>]
$color[1;303136]`
}

