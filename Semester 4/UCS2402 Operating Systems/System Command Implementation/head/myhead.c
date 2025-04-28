#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFFER_SIZE 4096

int main(int argc, char *argv[]) {
    // Check if the file argument was provided
    if (argc < 2) {
        printf("Usage: %s filename\n", argv[0]);
        return 1;
    }

    // Open the file for reading
    int fd = open(argv[1], O_RDONLY);
    if (fd == -1) {
        perror("Error: ");
        return 1;
    }

    // Read and print the first 10 lines of the file
    char buffer[BUFFER_SIZE];
    int count = 0;
    int n;
    while ((n = read(fd, buffer, BUFFER_SIZE)) > 0) {
        for (int i = 0; i < n; i++) {
            putchar(buffer[i]);

            if (buffer[i] == '\n') {
                count++;
                if (count == 10) {
                    close(fd);
                    return 0;
                }
            }
        }
    }

    close(fd);
    return 0;
}
