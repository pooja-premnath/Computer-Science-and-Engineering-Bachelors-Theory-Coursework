#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <sys/types.h>



int main(int argc, char *argv[]) {
    // Check for correct usage
    if (argc != 2) {
        printf("Usage: mkdir <dir_name>\n");
        return 1;
    }

    // Create the directory with the specified name
    if (mkdir(argv[1], 0777) == -1) {
        perror("Error: ");
        return 1;
    }

    return 0;
}
