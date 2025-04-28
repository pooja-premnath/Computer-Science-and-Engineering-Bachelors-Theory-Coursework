#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>

#define BUF_SIZE 1024

int main(int argc, char *argv[]) {
    int source_fd, dest_fd, num_read, num_written;
    char buf[BUF_SIZE];

    // Check if enough arguments were provided
    if (argc != 3) {
        printf("\n NOT ENOUGH ARGUMENTS PROVIDED");
        exit(EXIT_FAILURE);
    }

    // Open the source file for reading
    source_fd = open(argv[1], O_RDONLY);
    if (source_fd == -1) {
        printf("\n SOURCE FILE DOES NOT EXIST!!!");
        exit(EXIT_FAILURE);
    }

    // Open the destination file for writing (create it if it doesn't exist)
    dest_fd = creat(argv[2], 0644);
    if (dest_fd == -1) {
        printf("\n COULDN'T CREATE DESTINATION FILE");
        exit(EXIT_FAILURE);
    }

    // Copy the contents of the source file to the destination file
    while ((num_read = read(source_fd, buf, BUF_SIZE)) > 0) {
        num_written = write(dest_fd, buf, num_read);
        
    }

    return 0;
}
