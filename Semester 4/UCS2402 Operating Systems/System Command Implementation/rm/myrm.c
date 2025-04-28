#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    // Check for correct usage
    if (argc != 2) {
        printf("Usage: rm <filename>\n");
        return 1;
    }

    // Delete the file with the specified name
    if (remove(argv[1]) == -1) {
        perror("Error: ");
        return 1;
    }

    return 0;
}
