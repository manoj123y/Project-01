#include <stdio.h>
int main()
{
    int i, W, a[10], b[10], N, sum2 = 0, sum1 = 0, sub[10];
    printf("enter the round of the game  ");
    scanf("%d", &N);
    printf("enter the score of the first player");
    for (i = 0; i < N; i++)
    {
        scanf("%d", &a[i]);
    }

    printf("enter the score of the second player");
    for (i = 0; i < N; i++)
    {
        scanf("%d", &b[i]);
    }
    for (i = 0; i < N; i++)
    {
        sum1 = sum1 + a[i];
        // printf("%d\n", sum1);

        sum2 = sum2 + b[i];
        //  printf("%d\n", sum2);
        if (sum1 > sum2)
        {

            printf("%d", 1);
            sub[i] = sum1 - sum2;
            printf("%d\n", sub[i]);
        }
        else
        {
            printf("%d", 2);
            sub[i] = sum1 - sum2;
            printf("%d\n", sub[i]);
        }

        // sub[i] = sub[0];
        // if (sub[i + 1] > sub[i])
        //     sub[i] = sub[i + i];
        // break;
    }
    printf("%d", sub[i]);
}
