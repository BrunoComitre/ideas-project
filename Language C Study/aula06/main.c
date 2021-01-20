# include <stdio.h>

int main() {

    /*

    Valores Formatados

    */

    // printf("%tipo_de_saida", valor_a_ser_impresso);
    // printf("%tipo1 %tipo2", var1, var2);
    
    // integer %i OU %d
    int num = 11;
    printf("%i \n", num);

    int num2 = 1111;
    printf("%d \n", num2);

    // float %f
    float num3 = 0.4;
    printf("%f \n", num3);

    // double %f
    double _2numeros = 10.00000015;
    printf("%f \n", _2numeros);

    // char %c
    char num_eros = 'B';
    printf("%c \n", num_eros);

    // string %s
    // s numeros = 'Bruno';
    // printf("%s \n", numeros);  

    // void não tem print ou define valor
    // void numeroVerificado;
    // printf("%d \n", numeroVerificado);

    // %u módulo de um número
    // %p endereço de memória
    // %e OU %E para imprimir número com notação científica
    // %% para imprimir somente UM sinal de porcentagem

    int x = 10;
    printf("%i \n", x);

    float ff = 4.12;
    printf("%f \n", ff);

    printf("%i - %f \n", x, ff);

    return 0;
}


    
   

    /*

    1 - Toda variável possui um nome
    2 - Tova variável posssui um tipo
    3 - Toda variavel possui um tamanho
    4 - Toda variavel possui um valor

    a - é temporário
    b - quando um programa é fechado ou pc desligado , tudo que estiver na memória nao será salvo
    c - valores armazenados na memória são voláteis
    d - o valor antigo da nosa variável será sobreposto
    
    */
  


    /*

    // Tipo nomeDaVariavel = valorPadrão;

    // Únicos jeito de definir nomes de variáveis
    
    int num, num2 = 0;
    int num3 = 0;
    double numeroVerificado;
    int _2numeros;
    int num_eros;

    */


    /*

    // Tipo de variáveis
    
    1 - char   - a, b, c     - 1 Byte ou seja, 8 bits
    2 - int    - 1, 2, 3     - 2 Bytes - 32768+ 32767-
    3 - float  - 1.0, 4.5    - 4 Bytes 
    4 - void   - vazio       - Vazio
    5 - double - 10.00000015 - 8 Bytes
    
    */


