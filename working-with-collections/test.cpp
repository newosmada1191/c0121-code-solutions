#include <iostream>
#include <string>

using namespace std;

#define MAX 1000

bool areSymbolsBalanced(string expr);

class Stack
{
private:
    int top;

public:
    char a[MAX];

    Stack();
    ~Stack();
    bool push(char x);
    char pop();
    char peek();
    bool isEmpty();
};

Stack::Stack()
{
    cout << "Constructor called\n";
    this->top = -1;
}

Stack::~Stack()
{
    std::cout << "Destructor called\n";
}

bool Stack::push(char x)
{
    if (top > MAX)
    {
        cout << "Stack Overflow\n";
        return false;
    }
    else
    {
        a[++top] = x;
        //cout << x << " pushed into stack\n";
        return true;
    }
}

char Stack::pop()
{
    if (top < 0)
    {
        //cout << "Stack is empty\n";
        return '\0';
    }
    else
    {
        char x = a[top--];
        //cout << x << " popped off the stack\n";
        return x;
    }
}
char Stack::peek()
{
    if (top < 0)
    {
        //cout << "Stack is empty\n";
        return '\0';
    }
    else
    {
        char x = a[top];
        return x;
    }
}

bool Stack::isEmpty()
{
    return (top < 0);
}

bool areSymbolsBalanced(string expr)
{
    Stack *s = new Stack();

    for (int i = 0; i < expr.length(); i++)
    {
        char prevChar = s->peek();
        switch (expr[i])
        {
        case '(':
        case '[':
        case '{':
            s->push(expr[i]);
            continue;
        case ')':
            if (s->isEmpty())
... (59 lines left)
