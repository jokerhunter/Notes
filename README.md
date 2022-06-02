# Notes

- git remote rm origin
- git remote add origin <repo url>

…or create a new repository on the command line

```shell
echo "# Notes" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:jokerhunter/Notes.git
git push -u origin main
```

…or push an existing repository from the command line
```shell
git remote add origin git@github.com:jokerhunter/Notes.git
git branch -M main
git push -u origin main
```
…or import code from another repository
```shell
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
```
