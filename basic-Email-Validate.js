//----------------------------------1-Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir javascript kodu yazınız.-----------------//
//----------------------------------Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"------------------------------//

let email = "robin_singh@example.com"

function emailValidate (email){
  let emailName = email.split("@")[0]
  return emailName.slice(0,emailName.length-3) + "...@" + email.split("@")[1]
}
console.log(emailValidate('robin_singh@example.com'));





