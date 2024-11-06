// let newstr = "";
// function StringPalindrome(s, l) {
//   //   console.log(s.split("").reverse().join(""))
//   if (l < 0) return;
//   newstr += s[l];
//   StringPalindrome(s, l - 1);
// }
// StringPalindrome("saas", "saas".length - 1);
// if("saaS".toLowerCase()===newstr.toLowerCase())
// {
//     console.log("palindrome")
// }
// else
// {
//     console.log("not palindrome")
// }

function StringPalindrome(str, i, n) {
  if (i >= n) return true;
  if (str[i] !== str[n]) return false;
  return StringPalindrome(str, i + 1, n - 1);
}
console.log(StringPalindrome("saar", 0, "saar".length - 1));
