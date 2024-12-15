function solve(input) {
  let file = input.substring(input.lastIndexOf("\\") + 1);

  let fileName = file.substring(0, file.lastIndexOf("."));

  let extension = file.substring(file.lastIndexOf(".") + 1);

  console.log(
    [`File name: ${fileName}`, `File extension: ${extension}`].join("\n")
  );
}

solve("C:\\Internal\\training-internal\\Template.pptx");
