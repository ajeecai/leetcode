/**
 * Definition for singly-linked list. */

// This is only for vs code, comment it in leetcode
struct ListNode
{
    int val;
    struct ListNode *next;
};
#define NULL 0

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
    struct ListNode *sum = NULL;
    struct ListNode *tmp = l1;
    int l1len = 0;
    int l2len = 0;

    while (tmp)
    {
        l1len++;
        tmp = tmp->next;
    }
    tmp = l2;
    while (tmp)
    {
        l2len++;
        tmp = tmp->next;
    }
    if (l2len > l1len)
    {
        struct ListNode *t = l1;
        l1 = l2;
        l2 = t;
    }

    int accum = 0;
    struct ListNode *curNode = NULL;
    while (l1)
    {
        int sec = 0;
        if (l2 && l2->val)
        {
            sec = l2->val;
        }
        int val = l1->val + sec + accum;
        accum = 0;
        if (val >= 10)
        {
            accum = 1;
            val = val % 10;
        }
        tmp = malloc(sizeof(struct ListNode));
        memset(tmp, 0, sizeof(struct ListNode));
        tmp->val = val;

        if (!sum)
        {
            sum = tmp;
            curNode = sum;
        }
        else
        {
            curNode->next = tmp;
            curNode = curNode->next;
        }
        l1 = l1->next;
        l2 = l2 ? l2->next : NULL;
    }
    if (accum)
    {
        tmp = malloc(sizeof(struct ListNode));
        memset(tmp, 0, sizeof(struct ListNode));
        tmp->val = accum;
        curNode->next = tmp;
    }
    return sum;
}