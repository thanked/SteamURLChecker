# SteamURLChecker
Check available custom URLs to use on your Steamprofile

### Requirements

- [Node.js v10.17.0+](https://nodejs.org/dist/latest-v10.x/node-v10.17.0.tar.xz)
- [Npm Package: Request](https://www.npmjs.com/package/request)
- [Npm Package: Colors](https://www.npmjs.com/package/colors)
- A file editor ([Visual Studio Code](https://code.visualstudio.com/download), [Notepad++](https://notepad-plus-plus.org/))

### Installation

1. Install Node.js & set it up.
2. Download a file editor if you don't have one.
3. Download the files from this Repository.
4. Put the files in a new folder on your desktop.

### Usage

1. Open **input.txt** and put your ids you want to check in there, split the ids with a linebreak.
2. **Shift + Right-click** in the folder you created and press **Open PowerShell window here**.
3. Type `npm install` in the command prompt.
4. Type `npm install request colors` in the command prompt.
5. Type `node app.js` in the command prompt.
6. Open the `output.txt` file and there you have your available ids to use.

### Optional
 - If you want the non-taken Steamprofile to open in a Chrome tab, uncomment line **3** and **47**.
 - If you want to sort away words with length lower than 3 and words that contains weird characters; enter your list of words in a file called `unsorted.txt` and then run `node sorter.js`. The sorted list will be put in a new file; `sorted.txt`.

# Generated URLs
I generated a bunch of non taken URLs and put them in the `output` folder.

- **Please note that this list is public and due to that some URLs have been taken**
- Also note that this list is being updated at some times to not include taken URLs
- I suggest you viewing them in `raw` due to the list contains quite many results
- [This](https://github.com/dwyl/english-words) is the list I'm using to obtain all english words
