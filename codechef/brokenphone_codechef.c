#include <stdio.h>
int main()
{
    int T, x, y;
    scanf("%d", &T);
    if (T >= 1 && T <= 1000)
    {
        while (T)
        {
            scanf("%d%d", &x, &y);
            if ((x >= 1 && x <= 10000) && (y >= 1 && y <= 10000))
            {
                if (x > y)
                    printf("NEW PHONE\n");
                else if (x == y)
                    printf("ANY\n");
                else
                    printf("REPAIR\n");
            }

            T--;
        }
    }
}