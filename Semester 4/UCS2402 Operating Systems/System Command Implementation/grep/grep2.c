#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>



#define BUFSIZE 512

int main(int argc, char *argv[]) {
   

    char *filename = argv[2];

    int fd = open(filename, O_RDONLY);
    char *p= argv[1];
    char*ret;
    char buf[BUFSIZE];
    char line[BUFSIZE];
    int nread, i, line_num = 0;
    char *lines[BUFSIZE];  // List to store lines
    int num_lines = 0;

    while ((nread = read(fd, buf, BUFSIZE)) > 0) {
        for (i = 0; i < nread; i++) {
            if (buf[i] == '\n') {
                line[line_num] = '\0';  // Add null terminator at the end of line
                char *new_line = strdup(line);  // Create a duplicate of the line
                lines[num_lines] = new_line;  // Add the line to the list
                num_lines++;
                line_num = 0;  // Reset line index for the next line
            } else {
                line[line_num] = buf[i];
                line_num++;
            }
        }
    }
    
    for (int i = 0; i < num_lines; i++) {
    if ((ret = strstr(p, lines[i])) != NULL) {
        printf("Matching line: %s\n", ret);
        printf("Line %d: %s\n", i+1, lines[i]);
    }
}


    
    // Print the lines
    for (i = 0; i < num_lines; i++) {
        printf("Line %d: %s\n", i+1, lines[i]);
        
    }

    close(fd);
    return 0;
}

