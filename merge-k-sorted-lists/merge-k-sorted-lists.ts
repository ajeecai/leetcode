// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const nbr = lists.length;
  let head: ListNode | null = null;
  let cur: ListNode | null = null;

  let maxNode: ListNode | null = null;
  let index = -1;
  do {
    maxNode = null;
    // console.log("new round compare");
    for (let i = 0; i < nbr; ++i) {
      if (!lists[i]) {
        // console.log('skip empty lists[%d]', i)
        continue;
      }

      if (maxNode) {
        if (lists[i]!.val != undefined && maxNode!.val > lists[i]!.val) {
          maxNode = lists[i];
          index = i;
          // console.log("#1 maxNode is pointing to lists[%d]", i);
        }
      } else {
        maxNode = lists[i];
        index = i;
        // console.log("#2 maxNode is pointing to lists[%d]", i);
      }
    }

    if (!head) {
      head = maxNode;
      cur = head;
    } else if (cur) {
      cur!.next = maxNode;
      cur = cur!.next;
    }

    if (index != -1) {
      lists[index] = lists[index]!.next;
      index = -1;
    }
  } while (maxNode);

  return head;
}
