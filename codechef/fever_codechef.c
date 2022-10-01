#include <stdio.h>
int main()
{
    int T, x;
    scanf("%d", &T);
    if(T>=1&&T<=10)
    while (T)
    {
        scanf("%d", &x);
        if (x >= 94 && x <= 103)
        {
            if (x > 98)
                printf("YES\n");
            else
                printf("NO\n");
        }

        T--;
    }
}