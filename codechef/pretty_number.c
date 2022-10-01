#include <stdio.h>
int main()
{
    int l, r, i, t, count = 0;
    scanf("%d", &t);
    while (t)
    {
        count = 0 * count;
        scanf("%d%d", &l, &r);
        for (i = l; i <= r; i++)
            if (i % 10 == 2 || i % 10 == 3 || i % 10 == 9)
                count++;

        printf("%d\n", count);
        t--;
    }
    return 0;
}