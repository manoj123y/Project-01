#include <stdio.h>
int main()
{
    int B, T, W, X, Y, Z;
    scanf("%d", &T);
    while (T)
    {
        scanf("%d%d%d%d", &W, &X, &Y, &Z);
        B = W + (X - Y) * Z;
        printf("%d\n", B);
        T--;
    }
    return 0;
}