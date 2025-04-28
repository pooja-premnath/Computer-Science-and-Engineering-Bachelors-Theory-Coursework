#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>

int main(int argc, char *argv[]) {
    DIR *dirp;
    struct dirent *dp;

    // Check if the user provided a directory path as argument
    if (argc == 2) {
        // Try to open the directory using the provided path
        dirp = opendir(argv[1]);
        if (dirp == NULL) {
            perror("Failed to open directory");
            exit(EXIT_FAILURE);
        }
    } else {
        // If no path was provided, use the current working directory
        dirp = opendir(".");
        if (dirp == NULL) {
            perror("Failed to open current directory");
            exit(EXIT_FAILURE);
        }
    }

    // Traverse the directory entries and output their names
    while ((dp = readdir(dirp)) != NULL) {
        printf("%s\n", dp->d_name);
    }

    closedir(dirp);
    
    return 0;
}
