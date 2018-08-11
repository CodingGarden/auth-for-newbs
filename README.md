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
		* [x] Create and sign a JWT
      * [x] Respond with JWT
* [x] Create Login Page
	* [x] Form with: username and password
	* [x] When form is submitted
		* [x] Validate username
			* [x] Display errors
		* [x] Validate password
			* [x] Display errors
		* [x] POST request to server /auth/login
			* [x] Display errors
			* [x] If succesful login
				* [x] Store the token in localStorage
				* [x] Redirect to the "dashboard"
* [x] If a logged in user visits the signup or login page, redirect them to the dashboard
* [x] If a non logged in user visits the dashboard, redirect to the login page
* [x] After sign up, immediately login
* [x] Show username on dashboard
* [ ] On homepage, show go to dashboard button instead of signup/login button
* [ ] If logged in:
	* [ ] Show logout button in header
	* [ ] Show user icon and username in header

### Authorization:
* [x] Visitors can only see the homepage
	* [x] checkTokenSetUser middleware
		* [x] get token from Authorization header
			* [x] if defined ---
				* [x] Verify the token with the token secret
				* [x] Set req.user to be the decoded verified payload
			* [x] else - move along
	* [x] isLoggedIn middleware
		* [x] if req.user is set - move along
		* [x] else - send an unauthorized error message
	* [x] redirect to login form
* [x] Logged in users can only see their page
* [x] Create notes form on client
	* [x] Title
	* [x] Description
* [ ] POST /api/v1/notes
	* [ ] Must be logged in
	* [ ] Logged in Users Can Create Notes
		* [ ] Title
		* [ ] Description -- markdown
		* [ ] Set user_id on server with logged in users id
* [ ] GET /api/v1/notes
	* [ ] Must be logged in
	* [ ] Logged in Users Can request all their notes 
		* [ ] Get all notes in DB with logged in users user_id
* [ ] List all notes on client
	* [ ] Render description with Markdown

## STRETCH

* [ ] View user profile
* [ ] Users can mark notes as public
	* [ ] Notes show up on profile

## Admin Page:
* [ ] Admin page that lists all users
	* [ ] admin table with user_id
	* [ ] de-activate users
* [ ] Admin can see any page on site
* [ ] Rate limiting
  * [ ] Prevent brute force logins
	* [ ] Lock out account after too many login attempts
* [ ] Password strength meter!
* [ ] reCaptcha for signup/login
* [ ] Testing...

$2y$12$cj4BYDSkUrsk/mgketfvQekBnTF2iOiy6ZK.AjtVRDML5KICytbzm
$2y$12$0gzNy1.CwIU2AJqDyFnPwuJNfJ63m3VB0OxQ4SrNq8UPlabsqBBF.
