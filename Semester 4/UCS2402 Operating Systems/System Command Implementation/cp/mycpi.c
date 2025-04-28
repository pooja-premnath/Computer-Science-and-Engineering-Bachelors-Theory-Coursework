#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>

#define BUF_SIZE 1024

int main(int argc, char *argv[]) {
    int source_fd, dest_fd, num_read, num_written;
    char buf[BUF_SIZE], answer;

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

    // Open the destination file for writing
    dest_fd = open(argv[2], O_WRONLY | O_CREAT | O_EXCL, 0644);
    if (dest_fd == -1) {
        // Check if the error is due to the file already existing
        if (errno == EEXIST) {
            printf("The file '%s' already exists. Do you want to overwrite it? (y/n) ", argv[2]);
            scanf(" %c", &answer);
            if (answer != 'y' && answer != 'Y') {
                printf("Copying cancelled.\n");
                exit(EXIT_SUCCESS);
            }
            // Try opening the file again, this time allowing overwriting
            dest_fd = open(argv[2], O_WRONLY | O_CREAT | O_TRUNC, 0644);
        }
    }

    // Copy the contents of the source file to the destination file
    while ((num_read = read(source_fd, buf, BUF_SIZE)) > 0) {
        num_written = write(dest_fd, buf, num_read);
        
    }

    return 0;
}
