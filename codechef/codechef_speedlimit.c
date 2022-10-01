#include <stdio.h>
int main()
{
    int T, X, Y;
    float A, a, b, B;
    scanf("%d", &T);
    if (T > 0)
    {
        while (T)
        {

            scanf("%d%d%d%d", &A, &X, &B, &Y);
            a = A / X;
            b = B / Y;
            printf("%f  %f", a, b);
            // if (A / X == B / Y)
            //     printf("Equal\n");
            // else if (A / X > B / Y)
            //     printf("Alice\n");
            // else

            //     printf("Bob\n");

            T--;
        }
    }
    return 0;
}