# Audiophiler Front-End
This is the new React front-end for CSH audiophiler. The React app interfaces with the API written by Steve Greene to do things like rendering, uploading, or deleting files.

# TODO
* Figure out an OIDC solution, because everything that needs to be done from this point on relies on being able to access the API.
* Add a delete button to the AudioFile component if the user is the owner of that file or an admin. There's a few ways I could do that, but I need to figure out which way is the best.
* Add filtering and pagination. This shouldn't be difficult, just need to make some changes to the API.

# Installation and Development
* Clone the repo to your machine.
* From the root of the repo, run `npm install node-modules`.
* Run `npm start` to run the app locally.
* Make any changes you'd like and submit a pull request.
