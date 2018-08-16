
  ```
    git checkout master
    git checkout -b develop
    git checkout -b feature_branch
    # work happens on feature branch
    git checkout develop
    git merge feature_branch
    git checkout master
    git merge develop
    git branch -d feature_branch 
    
  ```
      
### Delete branch from local and remote. go to that branch then
    git push --delete origin login

  1.A develop branch is created from master
  
  2.A release branch is created from develop
  
  3.Feature branches are created from develop
  
  4.When a feature is complete it is merged into the develop branch
  
  5.When the release branch is done it is merged into develop and master
  
 
 ### Rollback Code if you commited and push
  ```
  git reset --hard commit-id
 ``` 
 ### Rollback if you commited but not push
 ```
  git reset HEAD~ 
  git add -A
  git commit -m"message"
  ```
