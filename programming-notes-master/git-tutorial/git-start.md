## Push a new local branch to a remote Git repository and track it too
Create a new branch:
git checkout -b feature_branch_name
Edit, add and commit your files.
Push your branch to the remote repository:
git push -u origin feature_branch_name

## when more than 1 person working so you have to do this
  git pull --rebase origin master
  notes : --rebase option tells Git to move all of user commits to the tip of the master branch after synchronising it with the changes from the central repository,
  
## Start with the master branch
  git checkout master
  git fetch origin 
  git reset --hard origin/master
  
## Create a new-branch
  git checkout -b new-feature

## Update, add, commit, and push changes
  git status
  git add <some-file>
  git commit

## Push feature branch to remote
  git push -u origin new-feature
This process often results in a merge commit

## Once Bill is ready to accept the pull request,someone needs to merge the feature into the stable project
  git checkout master  
  git pull  
  git pull origin marys-feature  
  git push  
  This process often results in a merge commit

## push code and delete branch from local and remote   
  git push --delete origin login

## Delete branch
  git branch -d marys-feature
