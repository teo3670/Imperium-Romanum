module.exports = {
  name: "bill",
  code: `$description[1;
  :warning: __You have to pay your electricity bill twice a week at least__ :warning: 
    > :zap: **__Kwh__**: $getUserVar[messages] **__Kwh__**
    > :zap: **__Bill__**: $multi[$getUserVar[messages];20]__€__
   
]
    
  $color[1;303136]`
}