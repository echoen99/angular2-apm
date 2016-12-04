import { Component } from '@angular/core'


/*
Push local project
• Create your repo on github as mentioned above. 
• On your computer, go to your directory using the terminal. using the linux command line you would cd into the directory. From here you run the following commands to "connect" your existing project to your repo on github. (This is assuming that you created your repo on github and it is currently empty)
first do this to initialize git (version control).
git init
then do this to add all your files to be "monitored." If you have files that you want ignored, you need to add a .gitignore but for the sake of simplicity, just use this example to learn.
git add .
Then you commit and add a note in between the "" like "first commit" etc.
 git commit -m "Initial Commit"
Now, here is where you add your existing repo
git remote add github <project url>
But do not literally type <project url>, but your own project URL. How do you get that? Go to the link where your repo is on github, then copy the link. In my case, one of my repos is https://github.com/JGallardo/urbanhistorical so my resulting url for this command would just add .git after that. So here it would be 
git remote add github https://github.com/JGallardo/urbanhistorical.git
Test to see that it worked by doing 
git remote -v
You should see what your repo is linked to.
Then you can push your changes to github
git push github master
or 
git push origin master

From <http://stackoverflow.com/questions/17291995/push-existing-project-into-github> 




In case of error: 
	fatal: remote origin already exists.
Use: 
git remote rm origin

From <http://stackoverflow.com/questions/1221840/remote-origin-already-exists-on-git-push-to-a-new-repository> 
*/