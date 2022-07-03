//  Definition for singly-linked list.
struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{
    struct ListNode *end = head;
    struct ListNode *nPrev = head;
    int i = n;

    // preprocessing
    while (i--)
    {
        end = end->next;
    }
    if (end == NULL)
    {
        // ignore memory free
        return (head = head->next);
    }

    // example: 1,2,3,4,5
    // key logic
    while (end)
    {
        nPrev = nPrev->next;
        end = end->next;
    }

    // ignore memory free
    nPrev->next = nPrev->next->next;

    return head;
}