module.exports = {
  name:"help",
  code:`<@$authorID> 
$description[1;$addField[1;Jobs;\`$getServerVar[prefix]jobs\` __to see available jobs__]
$addField[1;Bills;\`$getServerVar[prefix]bill\` *(__to check your bill__)*,\`$getServerVar[prefix]paybill\` *(__to pay bills__)*]
$addField[1;Transactions;\`$getServerVar[prefix]transactions\` *(__both to deposit or withdraw money with buttons__)*,\`$getServerVar[prefix]dep\` *(__to deposit all or an amount of money__)*,\`$getServerVar[prefix]with\` *(__to withdraw all or an amount of money__)*]
$addField[1;Other;\`rob\`,\`work\`,\`buy-boat\`,\`buy-apple\`,\`buy-goat\`,\`milk\`]
$addField[1;General;\`afk\`,\`say\`,\`time\`]]
$color[1;303136]`
}