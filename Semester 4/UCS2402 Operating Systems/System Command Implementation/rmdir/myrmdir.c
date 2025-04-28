#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    // Check for correct usage
    if (argc != 2) {
        printf("Usage: rmdir <directory>\n");
        return 1;
    }

    // Remove the directory with the specified name
    if (rmdir(argv[1]) == -1) {
        perror("Error: ");
        return 1;
    }

    return 0;
}
