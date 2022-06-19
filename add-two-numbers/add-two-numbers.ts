//  * Definition for singly-linked list.

// This is only for vs code, comment it in leetcode
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum: ListNode | null = null;
  let tmp = l1;
  let l1len = 0;
  let l2len = 0;

  while (tmp) {
    l1len++;
    tmp = tmp.next;
  }
  tmp = l2;
  while (tmp) {
    l2len++;
    tmp = tmp.next;
  }
  if (l2len > l1len) {
    [l1, l2] = [l2, l1];
  }

  let accum = 0;
  let curNode: ListNode | null = null;
  while (l1) {
    let sec = 0;
    if (l2 && l2.val) {
      sec = l2.val;
    }
    let val = l1.val + sec + accum;
    accum = 0;
    if (val >= 10) {
      accum = 1;
      val = val % 10;
    }
    tmp = new ListNode(val);
    if (!sum) {
      sum = tmp;
      curNode = sum;
    } else {
      curNode!.next = tmp;
      curNode = curNode!.next;
    }
    l1 = l1.next;
    l2 = l2?.next || null;
  }
  if (accum) {
    curNode!.next = new ListNode(accum);
  }
  return sum;
}
