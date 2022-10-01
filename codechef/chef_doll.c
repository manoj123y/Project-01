#include <stdio.h>
int main()
{
    int a[100000], n, t, c = 0;
    scanf("%d", &t);
    if (t >= 1 && t <= 10)
    {
        while (t)
        {

            scanf("%d", &n);
            if (n >= 1 && n <= 100000)
            {
                for (int i = 0; i < n; i++)
                {
                    scanf("%d", &a[i]);
                }
                c = c * c;
                for (int i = 0; i < n; i++)
                {
                    if (a[i] % 2 != 0)
                        c++;
                }
            }
            printf("%d\n", c);

            t--;
        }
    }
}