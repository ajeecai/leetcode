//  Definition for singly-linked list.
struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{
    struct ListNode *end = head;
    struct ListNode *nPrev = NULL;
    int i = 0;

    while (end)
    {
        if (nPrev)
        {
            nPrev = nPrev->next;
        }
        else if (i == n)
        {
            nPrev = head;
        }
        ++i;
        end = end->next;
    }

    if (nPrev)
    {
        nPrev->next = nPrev->next->next;
    }
    else
    {
        if (i == n)
        {
            head = head->next;
        }
    }

    return head;
}