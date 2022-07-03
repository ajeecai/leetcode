function findSubstring(s: string, words: string[]): number[] {
  if (s.length == 0 || words.length == 0) {
    return [];
  }
  console.log(s);
  // #1, setup two dimentions for words
  let myWords: string[] = [];
  let myWordsCnt: number[] = [];
  for (let i = 0; i < words.length; ++i) {
    let found = false;
    for (let j = 0; j < myWords.length; ++j) {
      if (words[i] == myWords[j]) {
        myWordsCnt[j]++;
        found = true;
        break;
      }
    }
    if (found == false) {
      myWords.push(words[i]);
      myWordsCnt.push(1);
    }
  }

  console.log("myWords %j, myWordsCnt %j", myWords, myWordsCnt);

  // #2, find the words in s and fill in index
  let occurance = Array<number>(s.length);
  for (let i = 0; i < myWords.length; ++i) {
    let index = -1;
    let j = 0;
    while (j <= s.length - myWords[0].length) {
      if (
        occurance[j] == undefined &&
        (index = s.indexOf(myWords[i], j)) != -1
      ) {
        occurance[index] = i;
      }
      j += 1;
    }
  }

  console.log("occurance ", occurance);

  // #3, sliding windows to find
  let index: number[] = [];
  let potential = 0;
  let totalCnt = words.length;
  let myWordsCntCopy = [...myWordsCnt];
  let i = 0;
  while (i <= s.length - words[0].length) {
    console.log("i %d", i);
    if (occurance[i] == undefined) {
      if (totalCnt != words.length) {
        myWordsCntCopy = [...myWordsCnt];
        totalCnt = words.length;
        i = potential + 1;
      } else {
        ++i;
      }

      continue;
    }

    console.log(
      "i %d, occurance[%d] at %s, myWordsCntCopy %j",
      i,
      i,
      myWords[occurance[i]],
      myWordsCntCopy
    );

    if (myWordsCntCopy[occurance[i]]) {
      if (totalCnt == words.length) {
        potential = i;
      }
      myWordsCntCopy[occurance[i]]--;
      totalCnt--;
    } else {
      // i += words[0].length;

      console.log("not match, reset and continue");
      myWordsCntCopy = [...myWordsCnt];
      totalCnt = words.length;
      i = potential + 1;
      continue;
    }

    i = i + words[0].length;

    if (totalCnt == 0) {
      console.log("find a combination, save index and reset");
      index.push(potential);
      myWordsCntCopy = [...myWordsCnt];
      totalCnt = words.length;
      i = potential + 1;
    }
  }

  return index;
}

// [6, 10]
const s = "bbgoodwordgoodgoodbestwordac";
const words = ["best", "good", "good", "word"];

// [9]
// const s = "barfoothefoofoobarman";
// const words = ["foo", "foo"];

// [ 0 ... 10]
// const s = "aaaaaaaaaaaaaa";
// const words = ["aa", "aa"];

// [1,3 ]
// const s = "abaababbaba";
// const words = ["ab", "ba", "ab", "ba"];

console.log(findSubstring(s, words));
