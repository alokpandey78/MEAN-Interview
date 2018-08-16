## Generating a new SSH key and adding it to the ssh-agent
```
  1.Open Git Bash.
  2.ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  3.When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.
  Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
  4.At the prompt, type a secure passphrase.
  Enter passphrase (empty for no passphrase): [Type a passphrase]
  Enter same passphrase again: [Type passphrase again]
```
## Adding your SSH key to the ssh-agent

```
  1.Ensure the ssh-agent is running:
  start the ssh-agent in the background
  eval $(ssh-agent -s)
  Agent pid 55211

  2.Add your SSH private key to the ssh-agent.If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_rsa in the command with the name of your private key file.

  ssh-add ~/.ssh/id_rsa
```

3.Add the SSH key to your GitHub account.
```
  a.Copy the SSH key to your clipboard.
  clip < ~/.ssh/id_rsa.pub
  for window machin
  pbcopy < ~/.ssh/id_rsa.pub 
  for mackbook
  Copies the contents of the id_rsa.pub file to your clipboard
  b.In the upper-right corner of any page, click your profile photo, then click Settings.
  c.In the user settings sidebar, click SSH and GPG keys.
  d.Click New SSH key or Add SSH key.
  e.In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal window, you might call this key "Personal window".
  f.Paste your key into the "Key" field.
  g.Click Add SSH key.
  h.If prompted, confirm your GitHub password.
```
### you can see complete documention from here 
### 4. Check that you are connecting to the correct server
```
  To make sure you are connecting to the right domain, you can enter the following command:
  ssh -vT git@github.com

  Always use the "git" user
  ssh -T GITHUB-USERNAME@github.com
  Permission denied (publickey).

  You should verify your connection by typing:
  ssh -T git@github.com
  Hi username! You've successfully authenticated...
  
```
