#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <ctype.h>

int main(int argc, char *argv[]) {
    // Initialize counters for lines, words, and characters
    int lines = 0;
    int words = 0;
    int chars = 0;

    // Check for correct usage
    if (argc < 2) {
        printf("Usage: wc <filename>\n");
        return 1;
    }

    // Open the file for reading, or use stdin if no file is specified
    int fd;
    if (argc == 2) {
        fd = STDIN_FILENO;
    } else {
        fd = open(argv[1], O_RDONLY);
        if (fd == -1) {
            perror("Error: ");
            return 1;
        }
    }

    // Read the file character by character
    int prev_char = '\n';
    char curr_char;
    while (read(fd, &curr_char, 1) == 1) {
        // Increment character count
        chars++;

        // Increment line count if current character is a newline
        if (curr_char == '\n') {
            lines++;
        }

        // Increment word count if current character is a whitespace and the previous character was not
        if (isspace(curr_char) && !isspace(prev_char)) {
            words++;
        }

        prev_char = curr_char;
    }

    // Close the file if it was opened
    if (fd != STDIN_FILENO) {
        close(fd);
    }

    // Print the results
    printf("%d %d %d\n", lines, words, chars);

    return 0;
}
