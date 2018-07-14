# Auth for Newbs

Add JWT-based authentication to a Node/Express/Mongo app.

## Authentication
* [x] Create Server
* [x] Add auth router
* [x] Create user with POST /auth/signup
	* [x] validate required fields
	* [x] Check if username is unique
	* [x] hash password with bcrypt
	* [x] insert into db
* [x] Create Landing Page
	* [x] Link to Sign Up Page
* [ ] Create Sign Up Page
	* [x] Form with: username and password
	* [x] When form is submitted
		* [x] Validate username
			* [x] Display errors
		* [x] Validate password
			* [x] Display errors
		* [x] POST request to server
			* [x] Display errors
			* [x] If succesful sign up
				* [x] Redirect to login page
* [ ] Login user with POST /auth/login
	* [x] validate the user
	* [x] check if username in db
		* [x] compare password with hashed password in db
			* [ ] rate limiting
		* [x] Create and sign a JWT
      * [x] Respond with JWT
* [ ] Create sign up form; show errors; redirect;
	* [ ] Validate required fields

### Authorization:
* [ ] Visitors can only see the homepage
	* [ ] isLoggedIn middleware
		* [ ] Validate JWT in header
      * [ ] set req.user to be JWT payload
		* [ ] send an unauthorized error message
	* [ ] redirect to login form
* [ ] Logged in users can only see their page
	* [ ] allowAccess middleware
		* [ ] id in url must match id in req.user
 		* [ ] send an unauthorized error message
	* [ ] redirect to user page if they visit the homepage
		* [ ] set user_id in localStorage after login/signup
* [ ] Add GET /auth/logout to clear user_id cookie
	* [ ] redirect to login page

## STRETCH

## Admin Page:
* [ ] Admin page that lists all users
	* [ ] admin table with user_id
	* [ ] de-activate users
* [ ] Admin can see any page on site
* [ ] Rate limiting
  * [ ] Prevent brute force logins

$2y$12$cj4BYDSkUrsk/mgketfvQekBnTF2iOiy6ZK.AjtVRDML5KICytbzm
$2y$12$0gzNy1.CwIU2AJqDyFnPwuJNfJ63m3VB0OxQ4SrNq8UPlabsqBBF.
