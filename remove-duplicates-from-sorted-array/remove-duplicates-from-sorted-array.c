#include "stdio.h"
#include "string.h"

int removeDuplicates(int *nums, int numsSize)
{
  if (numsSize == 0)
  {
    return numsSize;
  }
  int val = nums[0];
  int p = -1;
  int sz = 1;
  for (int i = 1; i < numsSize; ++i)
  {
    if (val == nums[i])
    {
      // example: 1,1,2,2,2,4,5
      // memmove(&nums[i], &nums[i + 1], (numsSize - i - 1) * sizeof(int));
      // numsSize -= 1;
      // --i;

      if (p == -1)
      {
        p = i;
      }
    }
    else
    {
      val = nums[i];
      if (p != -1)
      {
        nums[p++] = nums[i];
      }
      sz++;
    }
  }
  return sz;
}
int main()
{
  int test[] = {1, 2};
  int n = removeDuplicates(test, sizeof(test) / sizeof(test[0]));
  for (int i = 0; i < n; ++i)
  {
    printf("%d ", test[i]);
  }
  printf("\n");
}