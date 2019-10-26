This project is for the frontend operation of a membership campaign.


The branch naming strategy 

1. All user branch name should start with the username eg- for user bibin - bibin-<AnyIdetifier>, for user arun - arun-<AnyIdetifier>
   After each change raise pull request with metapipeline
2. The branch metapipeline is for testing the changes and once its verified we will merge to master.
   So please align your branch with metapipeline initially and create branch from metapipeline and raise pull request to merge to metapipeline

Steps to setup local dev environment/building APK.

1. Install java SDK v8 (https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 
2. Add/Ensure path to java compiler executable (javac) to/in environment variable 'Path'. This is not automatically added in windows.
3. Install Android SDK and accept liscence agreements.
4. Install nodejs.
5. Install node packages 'ionic' and 'cordova' using 
   npm install -g ionic cordova
6. Clone this repository and open terminal in root folder.
7. Restore packages by running 'npm install' .
8. Run 'ionic serve' for dev environment. Run 'ionic cordova build android' for creating APK.
