// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let l1 = list1;
  let l2 = list2;
  let ret: ListNode | null = null;
  let rCur: ListNode | null = null;

  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  if (l1.val > l2.val) {
    ret = l2;
    l2 = l2.next;
  } else {
    ret = l1;
    l1 = l1.next;
  }

  rCur = ret;
  // console.log("l1 %d, l2 %d", l1?.val, l2?.val);
  while (l1 && l2) {
    if (l1.val < l2.val) {
      rCur.next = l1;
      rCur = rCur.next;
      l1 = l1.next;
    } else {
      rCur.next = l2;
      rCur = rCur.next;
      l2 = l2.next;
    }
  }

  //   console.log("l1 %d, l2 %d", l1?.val, l2?.val);
  rCur.next = l1 || l2;
  return ret;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length == 0) {
    return null;
  }
  let ret = lists[0];
  for (let i = 1; i < lists.length; ++i) {
    ret = mergeTwoLists(ret, lists[i]);
  }
  return ret;
}
