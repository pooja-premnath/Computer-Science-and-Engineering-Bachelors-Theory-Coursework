#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <ctype.h>

#define BUFFER_SIZE 4096

int main(int argc, char *argv[]) {
    
    if (argc < 2) {
        printf("Incorrect arg format");
        return 1;
    }

    
    int fd = open(argv[1], O_RDONLY);
    if (fd == -1) {
        
        return 1;
    }

    
    int line_number = 1;
    char buffer[BUFFER_SIZE];
    int bytes_read = 0;
    int count = 0;

    
    while ((bytes_read = read(fd, buffer, BUFFER_SIZE)) > 0) {
        for (int i = 0; i < bytes_read; i++) {
            
            if (buffer[i] == '\n') {
                
                printf("%d  ", line_number);
                line_number++;
            }
            
            printf("%c", buffer[i]);
        }
    }

   
    close(fd);

    return 0;
}
