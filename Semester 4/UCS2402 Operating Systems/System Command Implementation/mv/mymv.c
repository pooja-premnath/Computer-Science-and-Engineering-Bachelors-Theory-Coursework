#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    // Check for correct usage
    if (argc != 3) {
        printf("Usage: mv <source_file> <destination_file>\n");
        return 1;
    }

    // Use rename system call to move or rename the file
    if (rename(argv[1], argv[2]) != 0) {
        perror("Error: ");
        return 1;
    }

    // Print success message
    printf("File '%s' moved/renamed to '%s'\n", argv[1], argv[2]);

    return 0;
}
