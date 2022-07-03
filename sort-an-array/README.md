# sort-an-array

## Link

https://leetcode.com/problems/sort-an-array/

## Takeaway

- The idea is:

  - create an array in which each slot corresponds to words, let's say there are "abc", "def", "ghi", then the array is wordsForMatch[3]: boolean. If "def" changed to "abc", that is duplicate item. wordsForMatch[3][1]: the second dimention to record the numbers.

  - Search all words list by indexOf in the string, one by one, save the starting index into an array as long as string which is not initiated. When found, the next starting search point be jumped words[0].length.

    Mark each word to be found or not, as long as one can't be found, that means we shoud return []

    Let's say string is "xabcydefzghiabcdefghiend", the array after searching is

    ```
                xabcydefzghiabcdefghiend
    stringIndex[u0uuu1uuu2uu1uu2uu3uuuuu]

                xabcydefzghiabcabcdefghiend
    stringIndex[u0uuu1uuu2uu1uu2uu3uuuuu]

    ```

  - Then go though stringIndex, if meeting 0 at #i, set wordFound[0] = true, then check i + 3 and i + 6. If 3 of wordFound are marked true, means consecutive found. stringIndex acts as a sliding window, if not all matched,wordFound all cleanup, i+=1, do again.

  - consider constraints, memory won't be exhausted.

  ```
  1 <= s.length <= 10^4
  s consists of lower-case English letters.
  1 <= words.length <= 5000
  ```
