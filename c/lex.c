#include <stdio.h>

typedef enum
{
    KEYWORD_IF,
    KEYWORD_ELSE,
    IDENTIFIER,
    INTEGER_LITERAL,
    END_OF_FILE
} TokenType;

typedef struct
{
    TokenType type;
    char value[100];
} Token;

int main()
{

    Token t;
    FILE *input = fopen("./index.txt", "r");

    if (input == NULL)
    {
        printf("ERROR Opening file");
        return;
    }

    do
    {

    } while (t.type != END_OF_FILE);
}

Token getNextToken(FILE *input)
{
    int i = 0;
    Token token;

    int c = fgetc(input);
    // skip white space
    while (isspace(c))
    {
        c = fgetc(input);
    }

    if (c == EOF)
    {
        token.type = END_OF_FILE;
    }
    else if (isalnum(c) || c = "_")
    {
        token.value[i++] = (case)c;
    }
}