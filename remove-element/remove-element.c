int removeElement(int *nums, int numsSize, int val)
{
  // int len = numsSize;
  // int pw = -1;
  int len = 0;
  int pw = 0;
  for (int i = 0; i < numsSize; ++i)
  {
    if (nums[i] != val)
    {
      nums[pw] = nums[i];
      pw++;
      len++;
    }

    // if (nums[i] == val)
    // {
    //   if (pw == -1)
    //   {
    //     pw = i;
    //   }
    //   len--;
    // }
    // else
    // {
    //   if (pw != -1)
    //   {
    //     nums[pw++] = nums[i];
    //   }
    // }
  }
  return len;
}