function solve(string) {
  console.log(
    [
      string
        .substring(0, string.length / 2)
        .split("")
        .reverse()
        .join(""),
      string
        .substring(string.length / 2)
        .split("")
        .reverse()
        .join(""),
    ].join("\n")
  );
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
