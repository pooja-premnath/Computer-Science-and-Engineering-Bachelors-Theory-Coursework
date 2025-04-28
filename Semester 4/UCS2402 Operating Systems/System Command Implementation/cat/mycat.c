#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>

#define BUFFER_SIZE 1024

int main(int argc, char *argv[]) {
    // Check for correct usage
    if (argc != 2) {
        printf("Usage: cat <file>\n");
        return 1;
    }

    // Open the file for reading
    int file = open(argv[1], O_RDONLY);
    if (file == -1) {
        perror("Error: ");
        return 1;
    }

    // Read the file in chunks and print it to the console
    char buffer[BUFFER_SIZE];
    int num_read;
    while ((num_read = read(file, buffer, BUFFER_SIZE)) > 0) {
        write(STDOUT_FILENO, buffer, num_read);
    }

    // Close the file
    close(file);

    return 0;
}
