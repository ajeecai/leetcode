class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = head;
  let pprev: ListNode | null = null;
  let cur: ListNode | null = head;

  let cnt = 1;
  if (!prev) {
    return null;
  }
  head = cur!.next ? cur!.next : cur;

  while (cur) {
    if (cnt++ % 2 == 0) {
      prev.next = cur.next;
      cur.next = prev;
      [prev, cur] = [cur, prev];
      if (cnt > 3) {
        pprev!.next = prev;
      }
      // console.log('cnt ',cnt, ',pprev :', pprev,',prev ',prev)
    }
    pprev = prev;
    prev = cur;
    cur = cur ? cur.next : null;
  }
  return head;
}
