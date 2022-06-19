int myAtoi(char *s)
{
    unsigned int val = 0;
    int sign = 1;
    int len = 0;
    char *tmp = s;
    // trim white space
    while (*s == ' ' || *s == '\t')
    {
        s++;
    }
    // get sign
    if (*s == '+')
    {
        sign = 1;
        s++;
    }
    else if (*s == '-')
    {
        sign = -1;
        s++;
    }

    while (s)
    {
        if (*s <= '9' && *s >= '0')
        {
            int number = *s - '0';

            // printf("next c is %c, now val %d, 1<<31/10 %d, <<31 -1/10 %d\n", *s, val, ((unsigned int)1<<31)/10, (((unsigned int)1<<31) -1)/10);

            if (sign == -1)
            {
                if ((val > ((unsigned int)1 << 31) / 10) || ((val == ((unsigned int)1 << 31) / 10) && number >= 8))
                {
                    printf("min");
                    return (unsigned int)3 << 31; // -2^31 is represented as 0b11000...0 in signed
                }
            }
            else if (sign == 1)
            {
                if ((val > (int)(((unsigned int)1 << 31) - 1) / 10) || ((val == (int)(((unsigned int)1 << 31) - 1) / 10) && number >= 7))
                {
                    printf("max");
                    return ((unsigned int)1 << 31) - 1;
                }
            }

            val = val * 10 + number;
            s++;
        }
        else
        {
            // printf("to break, c is %c\n", *s);
            break;
        }
    }
    return sign * val;
}
