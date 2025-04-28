#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFFER_SIZE 2048

int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Usage: %s searchstring filename\n", argv[0]);
        exit(1);
    }

    char *searchstr = argv[1];
    char *filename = argv[2];

    int fd = open(filename, O_RDONLY);
    if (fd == -1) {
        printf("Error opening file %s\n", filename);
        exit(1);
    }

    char buffer[BUFFER_SIZE];
    int bytes_read, line_number = 0;

    while ((bytes_read = read(fd, buffer, BUFFER_SIZE)) > 0) {
        char *pos = buffer;
        while ((pos = strstr(pos, searchstr)) != NULL) {
            int line_start = 0;
            for (int i = 0; i < pos - buffer; i++) {
                if (buffer[i] == '\n') {
                    line_start = i + 1;
                }
            }
            int line_end = pos - buffer;
            while (line_end < bytes_read && buffer[line_end] != '\n') {
                line_end++;
            }
            char line_buffer[line_end - line_start + 1];
            memcpy(line_buffer, buffer + line_start, line_end - line_start);
            line_buffer[line_end - line_start] = '\0';
            printf("%s\n",line_buffer);
            pos += strlen(searchstr);
        }
        line_number++;
    }

    if (bytes_read == -1) {
        printf("Error reading file %s\n", filename);
        exit(1);
    }

    close(fd);
    return 0;
}

