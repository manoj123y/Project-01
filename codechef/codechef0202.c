
#include <stdio.h>
int main()
{
    int i, T, N, a[N], c = 0;
    scanf("%d", &T);

    while (T)
    {
        c = c * 0;

        scanf("%d", &N);

        for (i = 0; i < N; i++)
            scanf("%d", &a[i]);
        for (i = 0; i < N; i++)
        {
            if (a[i] >= 1000)
                c++;
        }
        printf("%d\n",c);
        T--;
    }
}
