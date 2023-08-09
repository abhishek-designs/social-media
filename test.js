const name =
  "Write, Edit and Run your Javascript code using JS Online Compiler";

const splitTheWord = name.split(" ");

const reverseString = (str) => {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
};

const updateSenArr = [];
for (let i = 0; i < splitTheWord.length; i++) {
  const reverseWord = reverseString(splitTheWord[i]);

  updateSenArr.push(reverseWord);
}
console.log(updateSenArr.join(" "));
